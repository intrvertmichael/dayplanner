import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Timeline from '../components/Timeline'
import Intro from '../components/Intro'
import Event from '../components/Event'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Intro />
			<Timeline />
			<Event color='green' />
			<Event color='yellow' />
		</div>
	)
}

export default Home
