import styles from '../../styles/Form.module.css'

const Color = () => {
	return (
		<>
			<label>Color:</label>
			<div className={styles.colors}>
				<div className={styles.colorBlock} />
				<div className={styles.colorBlock} />
				<div className={styles.colorBlock} />
				<div className={styles.colorBlock} />
			</div>
		</>
	)
}

export default Color
