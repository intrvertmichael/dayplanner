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

	const length = eventDetails.endTime - eventDetails.startTime

	const pos = {
		height: Math.round(length * 3.3333),
		top: Math.round(eventDetails.startTime * 3.3333),
		left: '80px',
	}

	// converting minutes to readable time
	const startTime = convertTime(eventDetails.startTime)
	const endTime = convertTime(eventDetails.endTime)

	// creating character limit and gap between label and time
	let gap: number = 5
	let limit: number

	if (length <= 15) {
		gap = 0
		limit = 45
	} else if (length <= 30) limit = 90
	else if (length <= 45) limit = 140
	else limit = 180

	let labelGap = { paddingBottom: `${gap}px` }
	let label =
		eventDetails.label.length >= limit
			? eventDetails.label.substring(0, limit) + '...'
			: eventDetails.label

	return (
		<div style={pos} className={styles.wrapper}>
			<div style={eventStyles} className={styles.event}>
				<div className={styles.icon}> {eventDetails.icon} </div>

				<div className={styles.description}>
					<div style={labelGap} className={styles.label}>
						{label}
					</div>
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
