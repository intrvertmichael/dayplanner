import React from 'react'
import styles from '../../styles/Timeline.module.css'

import Event from '../Event'
import { DayEvent } from '../../types'

const Timeline = () => {
	const db: DayEvent[] = [
		{
			id: 1,
			label: 'This is an event description',
			icon: '🏀',
			startTime: 0, // in minutes
			endTime: 15, // in minutes
			length: 15,
			color: '#FFAFA2', // red
		},
		{
			id: 2,
			label: 'This is another event description',
			icon: '⚽️',
			startTime: 15,
			endTime: 45,
			length: 30,
			color: '#A2D39B', // green
		},
		{
			id: 3,
			label: 'This the third event description',
			icon: '🚄',
			startTime: 45,
			endTime: 90,
			length: 45,
			color: '#B4CFE7', // blue
		},
		{
			id: 4,
			label: 'Fourth event description',
			icon: '🤼‍♂️',
			startTime: 90,
			endTime: 150,
			length: 60,
			color: '#F4B721', // yellow
		},
		{
			id: 5,
			label: 'Afternoon event',
			icon: '🌸',
			startTime: 870,
			endTime: 900,
			length: 30,
			color: '#F4B721', // yellow
		},
	]

	let labels = [<li key={12}>{12}</li>]
	for (let i = 1; i <= 12; i++) labels.push(<li key={'am' + i}> {i} </li>)
	for (let i = 1; i <= 11; i++) labels.push(<li key={'pm' + i}> {i} </li>)

	return (
		<>
			<ul className={styles.timeline}>{labels}</ul>

			{db.map((eventDetails, key) => (
				<Event key={key} eventDetails={eventDetails} />
			))}
		</>
	)
}

export default Timeline
