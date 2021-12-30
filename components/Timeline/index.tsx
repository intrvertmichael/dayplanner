import React from 'react'
import styles from '../../styles/Timeline.module.css'

import Event from '../Event'
import { DayEvent } from '../../types'

interface Props {
	events: DayEvent[]
}

const Timeline = (Props: Props) => {
	const { events } = Props
	let labels = [<li key={12}>{12}</li>]
	for (let i = 1; i <= 12; i++) labels.push(<li key={'am' + i}> {i} </li>)
	for (let i = 1; i <= 11; i++) labels.push(<li key={'pm' + i}> {i} </li>)

	return (
		<>
			<ul className={styles.timeline}>{labels}</ul>

			{events.map((eventDetails, key) => (
				<Event key={key} eventDetails={eventDetails} />
			))}
		</>
	)
}

export default Timeline
