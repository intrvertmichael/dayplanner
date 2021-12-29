import styles from '../../styles/Event.module.css'

interface Props {
	color: string
}

const Event = (Props: Props) => {
	const { color } = Props

	let classes = `${styles.wrapper} `
	if (color === 'green') classes += ` ${styles.green}`
	if (color === 'yellow') classes += ` ${styles.yellow}`

	return (
		<div className={classes}>
			<div className={styles.event}>
				<div className={styles.icon}>🏀</div>

				<div className={styles.description}>
					<div className={styles.title}>This is an event description</div>
					<div className={styles.time}> 6:00am - 7:00am </div>
				</div>
			</div>
		</div>
	)
}

export default Event
