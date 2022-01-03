import styles from '../../styles/Form.module.css'
import { useState } from 'react'

import Color from './color'
import Text from './text'
import Icon from './icon'
import Time from './time'
import Preview from './preview'

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
						? { transform: 'rotate(-45deg)' }
						: { transform: 'rotate(0deg)' }
				}
				onClick={toggleFormVisbility}>
				+
			</button>

			<Preview showForm={showForm} />

			<h3>Add an Event</h3>
			<Icon />
			<Color />
			<Text />
			<Time start={true} />
			<Time start={false} />

			<input type='button' value='send' />
		</div>
	)
}

export default Form
