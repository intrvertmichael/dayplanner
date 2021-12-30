import styles from '../../styles/Form.module.css'
import { useState } from 'react'

const Form = () => {
	const [showForm, setShowForm] = useState(false)

	let hourDropDown = []
	for (let i = 1; i <= 12; i++) {
		hourDropDown.push(
			<option key={i} value={i}>
				{i}
			</option>,
		)
	}

	let minDropDown = []
	for (let i = 0; i < 60; i++) {
		let label = `${i}`
		if (i === 0) label = '00'

		minDropDown.push(
			<option key={label} value={label}>
				{label}
			</option>,
		)

		i += 14
	}

	function handleClick() {
		setShowForm(!showForm)
	}

	return (
		<div
			className={styles.form}
			style={
				showForm
					? { transform: 'translateX(0%)' }
					: { transform: 'translateX(100%)' }
			}>
			<button
				className={styles.toggle}
				style={
					showForm
						? { transform: 'rotate(45deg)' }
						: { transform: 'rotate(0deg)' }
				}
				onClick={handleClick}>
				+
			</button>
			<h3>Add an Event:</h3>

			<label>Color:</label>
			<div className={styles.colors}>
				<div className={styles.colorBlock} />
				<div className={styles.colorBlock} />
				<div className={styles.colorBlock} />
				<div className={styles.colorBlock} />
			</div>

			<label>Event Label:</label>
			<input type='text' />

			<div className={styles.time}>
				<label>Start Time:</label>

				<div className={styles.timeSelection}>
					<select name='hour' id='hour'>
						{hourDropDown}
					</select>
					<p>:</p>
					<select name='min' id='min'>
						{minDropDown}
					</select>
					<select name='min' id='min'>
						<option value='am'> am </option>
						<option value='pm'> pm </option>
					</select>
				</div>
			</div>

			<div className={styles.time}>
				<label>End Time:</label>

				<div className={styles.timeSelection}>
					<select name='hour' id='hour'>
						{hourDropDown}
					</select>
					<p>:</p>
					<select name='min' id='min'>
						{minDropDown}
					</select>
					<select name='min' id='min'>
						<option value='am'> am </option>
						<option value='pm'> pm </option>
					</select>
				</div>
			</div>

			<input type='button' value='send' />
		</div>
	)
}

export default Form
