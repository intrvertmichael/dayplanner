import { Dispatch, SetStateAction } from 'react'
import styles from '../../styles/Form.module.css'
import { DayEvent, validation } from '../../types'
import AmPm from './time_ampm'
import Hours from './time_hours'
import Mins from './time_mins'

const Time = ({
	start,
	validator,
	// setValidator,
	previewDetails,
	setPreviewDetails,
}: {
	start: boolean
	validator: validation
	setValidator: Dispatch<SetStateAction<validation>>
	previewDetails: DayEvent
	setPreviewDetails: React.Dispatch<React.SetStateAction<DayEvent>>
}) => {
	const errorStyle = { border: '3px solid red' }
	let style

	if (start && validator.time_start) style = errorStyle
	if (!start && validator.time_end) style = errorStyle

	return (
		<div className={styles.time}>
			<label>{start ? 'Start Time:' : 'End Time'}</label>

			<div className={styles.timeSelection} style={style}>
				<Hours
					start={start}
					previewDetails={previewDetails}
					setPreviewDetails={setPreviewDetails}
				/>
				<p>:</p>
				<Mins
					start={start}
					previewDetails={previewDetails}
					setPreviewDetails={setPreviewDetails}
				/>
				<AmPm
					start={start}
					previewDetails={previewDetails}
					setPreviewDetails={setPreviewDetails}
				/>
			</div>
		</div>
	)
}

export default Time
