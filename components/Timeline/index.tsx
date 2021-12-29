import React from 'react'
import styles from '../../styles/Timeline.module.css'

const Timeline = () => {
	let labels = []
	for (let i = 1; i <= 12; i++) {
		labels.push(<li key={i}>{i}</li>)
	}

	return (
		<ul className={styles.timeline}>
			{labels}
			{labels}
		</ul>
	)
}

export default Timeline
