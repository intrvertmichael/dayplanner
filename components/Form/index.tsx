import styles from '../../styles/Form.module.css'
import { useState } from 'react'

import { DayEvent, validation } from '../../types'

import Color from './color'
import Text from './text'
import Icon from './icon'
import Time from './time'
import Preview from './preview'
import { hasErrors } from './errors'

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
		const valid = hasErrors(previewDetails, setValidator)
		if (valid) console.log("it's all good")
	}

	function formReset() {
		setPreviewDetails(defaultEvent)
		setValidator(defaultValidator)
	}

	const formStateProps = {
		validator,
		setValidator,
		previewDetails,
		setPreviewDetails,
	}

	const formDivStyle = showForm
		? { transform: 'translateX(0%)' }
		: { transform: 'translateX(100%)' }

	const formBtnStyle = showForm
		? { transform: 'rotate(-45deg)' }
		: { transform: 'rotate(0deg)' }

	return (
		<div className={styles.form} style={formDivStyle}>
			<button
				className={styles.toggle}
				style={formBtnStyle}
				onClick={toggleFormVisbility}
			>
				+
			</button>

			<Preview showForm={showForm} previewDetails={previewDetails} />

			<h3>New Event</h3>

			<Icon {...formStateProps} />
			<Color {...formStateProps} />
			<Text {...formStateProps} />
			<Time {...{ start: true, ...formStateProps }} />
			<Time {...{ start: false, ...formStateProps }} />

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
