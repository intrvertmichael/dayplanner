import type { NextPage } from 'next'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

import Timeline from '../components/Timeline'
import Intro from '../components/Intro'
import Form from '../components/Form'

const Home: NextPage = () => {
	const [db, setDB] = useState([
		{
			id: 1,
			label: 'This is an event description',
			icon: '🏀',
			startTime: 0, // in minutes
			endTime: 15, // in minutes
			color: '#FFAFA2', // red
		},
		{
			id: 2,
			label: 'This is another event description',
			icon: '⚽️',
			startTime: 15,
			endTime: 45,
			color: '#A2D39B', // green
		},
		{
			id: 3,
			label: 'This the third event description',
			icon: '🚄',
			startTime: 45,
			endTime: 90,
			color: '#B4CFE7', // blue
		},
		{
			id: 4,
			label: 'Fourth event description',
			icon: '🤼‍♂️',
			startTime: 90,
			endTime: 150,
			color: '#F4B721', // yellow
		},
		{
			id: 5,
			label: 'Afternoon event',
			icon: '🌸',
			startTime: 870,
			endTime: 900,
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
