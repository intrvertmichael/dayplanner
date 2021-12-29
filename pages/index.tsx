import type { NextPage } from 'next'
import styles from '../styles/Home.module.css'

import Timeline from '../components/Timeline'
import Intro from '../components/Intro'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Intro />
			<Timeline />
		</div>
	)
}

export default Home
