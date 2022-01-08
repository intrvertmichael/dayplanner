import styles from '../../styles/Form.module.css'
import { useState } from 'react'

import { DayEvent, validation } from '../../types'

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

	const defaultValidator = {
		label: false,
		icon: false,
		time_start: false,
		time_end: false,
		color: false,
	}

	const [showForm, setShowForm] = useState(false)
	const [validator, setValidator] = useState<validation>(defaultValidator)
	const [previewDetails, setPreviewDetails] = useState<DayEvent>(defaultEvent)

	function toggleFormVisbility() {
		setShowForm(!showForm)
	}

	function formSubmitted() {
		const totalStartTime: number = getTotalTime(previewDetails.time_start)
		const totalEndTime: number = getTotalTime(previewDetails.time_end)
		const length = totalEndTime - totalStartTime

		console.log('previewDetails', previewDetails)

		setValidator({
			icon: previewDetails.icon === '🙂' ? true : false,
			label:
				previewDetails.label === 'Enter the Event Label here...' ? true : false,
			color: previewDetails.color === '' ? true : false,
			time_start: false,
			time_end: length < 0 ? true : false,
		})
	}

	function formReset() {
		setPreviewDetails(defaultEvent)
		setValidator(defaultValidator)
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

			<Icon
				validator={validator}
				setValidator={setValidator}
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>
			<Color
				validator={validator}
				setValidator={setValidator}
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>
			<Text
				validator={validator}
				setValidator={setValidator}
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>
			<Time
				start={true}
				validator={validator}
				setValidator={setValidator}
				previewDetails={previewDetails}
				setPreviewDetails={setPreviewDetails}
			/>
			<Time
				start={false}
				validator={validator}
				setValidator={setValidator}
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
