import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import Timeline from '../components/Timeline'
import Intro from '../components/Intro'
import Form from '../components/Form'
import { DayEvent } from '../types'

const Home: NextPage = () => {
	const [db, setDB] = useState<DayEvent[]>([
		{
			id: 1,
			label: 'This is an event description',
			icon: '🏀',
			time_start: {
				hours: 0,
				mins: 0,
				pm: false,
			},
			time_end: {
				hours: 0,
				mins: 10,
				pm: false,
			},
			color: '#FFAFA2', // red
		},
		{
			id: 2,
			label: 'This is another event description',
			icon: '⚽️',
			time_start: {
				hours: 0,
				mins: 15,
				pm: false,
			},
			time_end: {
				hours: 0,
				mins: 45,
				pm: false,
			},
			color: '#A2D39B', // green
		},
		{
			id: 3,
			label: 'This the third event description',
			icon: '🚄',
			time_start: {
				hours: 0,
				mins: 45,
				pm: false,
			},
			time_end: {
				hours: 1,
				mins: 30,
				pm: false,
			},
			color: '#B4CFE7', // blue
		},
		{
			id: 4,
			label: 'Fourth event description',
			icon: '🤼‍♂️',
			time_start: {
				hours: 1,
				mins: 30,
				pm: false,
			},
			time_end: {
				hours: 2,
				mins: 30,
				pm: false,
			},
			color: '#F4B721', // yellow
		},
		{
			id: 5,
			label: 'Afternoon event',
			icon: '🌸',
			time_start: {
				hours: 14,
				mins: 50,
				pm: false,
			},
			time_end: {
				hours: 15,
				mins: 30,
				pm: false,
			},
			color: '#F4B721', // yellow
		},
	])

	return (
		<div className={styles.container}>
			<Intro />
			<Timeline events={db} />
			<Form />
		</div>
	)
}

export default Home
