import styles from '../../styles/Event.module.css'
import { DayEvent, Time } from '../../types'

interface Props {
	key: number
	left: number
	eventDetails: DayEvent
}

export function getTotalTime(time: Time): number {
	let total: number = 0
	total += time.hours * 60
	total += time.mins
	total += time.pm ? 12 * 60 : 0
	return total
}

const Event = ({ eventDetails, left }: Props) => {
	const eventStyles = {
		backgroundColor: eventDetails.color,
	}

	const totalStartTime: number = getTotalTime(eventDetails.time_start)
	const totalEndTime: number = getTotalTime(eventDetails.time_end)
	const length = totalEndTime - totalStartTime

	const pos = {
		height: Math.round(length * 3.3333),
		maxHeight: eventDetails && eventDetails.preview ? '500px' : '',
		position: eventDetails && eventDetails.preview ? 'relative' : 'absolute',
		top:
			eventDetails && eventDetails.preview
				? 0
				: Math.round(totalStartTime * 3.3333),
		left: `${left}px`,
	} as React.CSSProperties

	// converting minutes to readable time
	const startTime = convertTime(totalStartTime)
	const endTime = convertTime(totalEndTime)

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

	if (length < 10) {
		return (
			<div className={styles.error}>
				<p>
					End Time cannot be <br />
					the same or less <br />
					than Start Time
				</p>
			</div>
		)
	}
	return (
		<div style={pos} className={styles.wrapper}>
			<div style={eventStyles} className={styles.event}>
				<div className={styles.icon}> {eventDetails.icon} </div>

				<div className={styles.description}>
					<div style={labelGap} className={styles.label}>
						{label}
					</div>

					{length > 15 && (
						<div className={styles.time}>
							{startTime} - {endTime}
						</div>
					)}
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
	else if (hourMath >= 12) {
		hours = hourMath === 12 ? '12' : `${hourMath - 12}`
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
