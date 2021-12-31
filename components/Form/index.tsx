import styles from '../../styles/Form.module.css'
import { useState } from 'react'

import Color from './color'
import Text from './text'
import Time from './time'

const Form = () => {
	const [showForm, setShowForm] = useState(false)

	function toggleFormVisbility() {
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
				onClick={toggleFormVisbility}>
				+
			</button>

			<h3>Add an Event:</h3>

			<Color />
			<Text />
			<Time start={true} />
			<Time start={false} />

			<input type='button' value='send' />
		</div>
	)
}

export default Form
