import styles from '../../styles/Form.module.css'
import { DayEvent } from '../../types'
import AmPm from './time_ampm'
import Hours from './time_hours'
import Mins from './time_mins'

interface Props {
	start: boolean
	previewDetails: DayEvent
	setPreviewDetails: React.Dispatch<React.SetStateAction<DayEvent>>
}

const Time = ({ start, previewDetails, setPreviewDetails }: Props) => {
	return (
		<div className={styles.time}>
			<label>{start ? 'Start Time:' : 'End Time'}</label>

			<div className={styles.timeSelection}>
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
