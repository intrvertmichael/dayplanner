import styles from '../../styles/Form.module.css'
import Event from '../Event'

interface Props {
	showForm: boolean
}
const Preview = (props: Props) => {
	return (
		<div
			className={styles.example}
			style={
				props.showForm
					? { transform: 'translateX(-110%)' }
					: { transform: 'translateX(0)' }
			}>
			<h3>Preview:</h3>
			<div style={{ position: 'relative' }}>
				<Event
					key={1}
					left={0}
					eventDetails={{
						preview: true,
						id: 1,
						label: 'This is an event description',
						icon: '🏀',
						startTime: 0, // in minutes
						endTime: 45, // in minutes
						color: '#FFAFA2', // red
					}}
				/>
			</div>
		</div>
	)
}

export default Preview
