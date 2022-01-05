import styles from '../../styles/Form.module.css'
import { useState } from 'react'

import { DayEvent } from '../../types'

import Color from './color'
import Text from './text'
import Icon from './icon'
import Time from './time'
import Preview from './preview'

const Form = () => {
	const defaultEvent: DayEvent = {
		preview: true,
		id: 0,
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
	const [previewDetails, setPreviewDetails] = useState<DayEvent>(defaultEvent)

	function toggleFormVisbility() {
		setShowForm(!showForm)
	}

	function formSubmitted() {
		console.log('form was submitted')
	}

	function formReset() {
		setPreviewDetails(defaultEvent)
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
