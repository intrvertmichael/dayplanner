import styles from '../../styles/Event.module.css'

interface DayEvent {
	id: number
	label: string
	icon: string
	startTime: number
	length: number
	color: string
}

interface Props {
	key: number
	eventDetails: DayEvent
}

const Event = ({ eventDetails }: Props) => {
	const eventStyles = {
		backgroundColor: eventDetails.color,
	}

	const position = {
		top: Math.round(eventDetails.startTime * 3.3333),
		height: Math.round(eventDetails.length * 3.3333),
	}

	return (
		<div style={position} className={styles.wrapper}>
			<div style={eventStyles} className={styles.event}>
				<div className={styles.icon}> {eventDetails.icon} </div>

				<div className={styles.description}>
					<div className={styles.title}> {eventDetails.label} </div>
					<div className={styles.time}> {eventDetails.startTime} </div>
				</div>
			</div>
		</div>
	)
}

export default Event
