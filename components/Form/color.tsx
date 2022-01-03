import { useState } from 'react'
import styles from '../../styles/Form.module.css'

import { FormProps } from '../../types'

const Color = ({ previewDetails, setPreviewDetails }: FormProps) => {
	const [selectedColor, setSelectedColor] = useState('')

	type hexColorType = {
		[key: string]: string
	}

	const hexColor: hexColorType = {
		red: '#ffafa2',
		green: '#a2d39b',
		blue: '#b4cfe7',
		yellow: '#f4b721',
	}

	const chosen = '2px solid white'

	function colorChosen(color: string) {
		if (color === selectedColor) {
			setSelectedColor('')
			setPreviewDetails({
				...previewDetails,
				color: '',
			})
		} else {
			setSelectedColor(color)
			setPreviewDetails({
				...previewDetails,
				color: hexColor[color],
			})
		}
	}

	return (
		<>
			<label>Color:</label>
			<div className={styles.colors}>
				<div
					className={styles.colorBlock}
					onClick={() => colorChosen('red')}
					style={{
						background: hexColor['red'],
						border: selectedColor === 'red' ? chosen : '',
					}}
				/>
				<div
					className={styles.colorBlock}
					onClick={() => colorChosen('green')}
					style={{
						background: hexColor['green'],
						border: selectedColor === 'green' ? chosen : '',
					}}
				/>

				<div
					className={styles.colorBlock}
					onClick={() => colorChosen('blue')}
					style={{
						background: '#b4cfe7',
						border: selectedColor === 'blue' ? chosen : '',
					}}
				/>

				<div
					className={styles.colorBlock}
					onClick={() => colorChosen('yellow')}
					style={{
						background: '#f4b721',
						border: selectedColor === 'yellow' ? chosen : '',
					}}
				/>
			</div>
		</>
	)
}

export default Color
