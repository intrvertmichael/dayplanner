import styles from '../../styles/Form.module.css'
import { useState } from 'react'

import { DayEvent } from '../../types'

import Color from './color'
import Text from './text'
import Icon from './icon'
import Time from './time'
import Preview from './preview'

const Form = () => {
	const [showForm, setShowForm] = useState(false)
	const [previewDetails, setPreviewDetails] = useState<DayEvent>({
		preview: true,
		id: 0,
		label: 'This is the Event Label',
		icon: '🙂',
		startTime: 0, // in minutes
		endTime: 45, // in minutes
		color: '',
	})

	function toggleFormVisbility() {
		setShowForm(!showForm)
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

			<h3>Add an Event</h3>
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
				// previewDetails={previewDetails}
				// setPreviewDetails={setPreviewDetails}
			/>

			<input type='button' value='send' />
		</div>
	)
}

export default Form
