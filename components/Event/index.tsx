import styles from '../../styles/Event.module.css'
import { DayEvent } from '../../types'

interface Props {
	key: number
	eventDetails: DayEvent
}

const Event = ({ eventDetails }: Props) => {
	const eventStyles = {
		backgroundColor: eventDetails.color,
	}

	const pos = {
		top: Math.round(eventDetails.startTime * 3.3333),
		height: Math.round(eventDetails.length * 3.3333),
		left: '100px',
	}

	const startTime = convertTime(eventDetails.startTime)
	const endTime = convertTime(eventDetails.endTime)

	return (
		<div style={pos} className={styles.wrapper}>
			<div style={eventStyles} className={styles.event}>
				<div className={styles.icon}> {eventDetails.icon} </div>

				<div className={styles.description}>
					<div className={styles.title}> {eventDetails.label} </div>
					<div className={styles.time}>
						{startTime} - {endTime}
					</div>
				</div>
			</div>
		</div>
	)
}

function convertTime(totalMins: number): string {
	const hourMath: number = Math.floor(totalMins / 60)
	let hours: string = `${hourMath}`
	let amPm: string = 'am'

	if (hourMath === 0) hours = '12'
	else if (hourMath > 12) {
		hours = `${hourMath - 12}`
		amPm = 'pm'
	}

	let mins: string
	const minsMath: number = totalMins % 60
	if (minsMath === 0) mins = ''
	if (minsMath < 10) mins = `:0${minsMath}`
	else mins = `:${minsMath}`

	return `${hours}${mins}${amPm}`
}

export default Event
