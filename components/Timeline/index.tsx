import React from 'react'
import styles from '../../styles/Timeline.module.css'

import Event from '../Event'
import { DayEvent } from '../../types'

const Timeline = (Props: { events: DayEvent[] }) => {
	const { events } = Props
	const labels = [<li key={12}>{12}</li>]
	for (let i = 1; i <= 12; i++) labels.push(<li key={'am' + i}> {i} </li>)
	for (let i = 1; i <= 11; i++) labels.push(<li key={'pm' + i}> {i} </li>)

	return (
		<>
			<ul className={styles.timeline}>{labels}</ul>

			{events.map((eventDetails, key) => (
				<Event key={key} left={80} eventDetails={eventDetails} />
			))}
		</>
	)
}

export default Timeline
