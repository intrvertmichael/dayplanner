import styles from '../../styles/Form.module.css'
import { useState } from 'react'

import { DayEvent } from '../../types'

import Color from './color'
import Text from './text'
import Icon from './icon'
import Time from './time'
import Preview from './preview'

import { getTotalTime } from '../Event'

const Form = () => {
	const defaultEvent: DayEvent = {
		preview: true,
		label: 'Enter the Event Label here...',
		icon: '🙂',
		time_start: {
			hours: 1,
			mins: 0,
			pm: false,
		},
		time_end: {
			hours: 1,
			mins: 30,
			pm: false,
		},
		color: '',
	}
	const [showForm, setShowForm] = useState(false)
	const [errorMessages, setErrorMessages] = useState<string[]>([])
	const [previewDetails, setPreviewDetails] = useState<DayEvent>(defaultEvent)

	function toggleFormVisbility() {
		setShowForm(!showForm)
	}

	function formSubmitted() {
		console.log('previewDetails', previewDetails)

		const totalStartTime: number = getTotalTime(previewDetails.time_start)
		const totalEndTime: number = getTotalTime(previewDetails.time_end)
		const length = totalEndTime - totalStartTime

		console.log('totalStartTime', totalStartTime)
		console.log('totalEndTime', totalEndTime)
		console.log('length', length)

		let error: string[] = []
		if (length < 0) error.push('The End Time must be after the Start Time')
		if (previewDetails.color === '')
			error.push("Please don't forget to choose a color")
		if (previewDetails.label === 'Enter the Event Label here...')
			error.push('Please add a label to the Event')
		if (previewDetails.icon === '') error.push('Please choose an icon')
		console.log('error', error)
		setErrorMessages(error)
	}

	function formReset() {
		setPreviewDetails(defaultEvent)
		setErrorMessages([])
	}

	return (
		<div
			className={styles.form}
			style={
				showForm
					? { transform: 'translateX(0%)' }
					: { transform: 'translateX(100%)' }
			}>
			<button
				className={styles.toggle}
				style={
					showForm
						? { transform: 'rotate(-45deg)' }
						: { transform: 'rotate(0deg)' }
				}
				onClick={toggleFormVisbility}>
				+
			</button>

			<Preview showForm={showForm} previewDetails={previewDetails} />

			<h3>New Event</h3>

			{errorMessages.length > 0 && (
				<ul className={styles.errorMessages}>
					{errorMessages.map((message, key) => {
						return <li key={key}>{message}</li>
					})}
				</ul>
			)}

			<Icon
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>
			<Color
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>
			<Text
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>
			<Time
				start={true}
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>
			<Time
				start={false}
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>

			<div>
				<input type='button' value='Add Event' onClick={formSubmitted} />
				<button className={styles.reset} onClick={formReset}>
					Reset
				</button>
			</div>
		</div>
	)
}

export default Form
