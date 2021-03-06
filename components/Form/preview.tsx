import styles from '../../styles/Form.module.css'
import Event from '../Event'

import { DayEvent } from '../../types'

const Preview = (props: { showForm: boolean; previewDetails: DayEvent }) => {
	return (
		<div
			className={styles.example}
			style={
				props.showForm
					? { transform: 'translateX(-112%)' }
					: { transform: 'translateX(0)' }
			}>
			<h3>Preview:</h3>
			<div style={{ position: 'relative' }}>
				<Event key={1} left={0} eventDetails={props.previewDetails} />
			</div>
		</div>
	)
}

export default Preview
