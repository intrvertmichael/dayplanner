import styles from '../../styles/Form.module.css'

import { FormProps } from '../../types'

const Color = ({ validator, previewDetails, setPreviewDetails }: FormProps) => {
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
		if (hexColor[color] === previewDetails.color) {
			setPreviewDetails({
				...previewDetails,
				color: '',
			})
		} else {
			setPreviewDetails({
				...previewDetails,
				color: hexColor[color],
			})
		}
	}

	const style = validator.color ? { border: '3px solid red' } : {}

	return (
		<>
			<label>Color:</label>
			<div className={styles.colors} style={style}>
				<div
					className={styles.colorBlock}
					onClick={() => colorChosen('red')}
					style={{
						background: hexColor['red'],
						border: previewDetails.color === hexColor['red'] ? chosen : '',
					}}
				/>
				<div
					className={styles.colorBlock}
					onClick={() => colorChosen('green')}
					style={{
						background: hexColor['green'],
						border: previewDetails.color === hexColor['green'] ? chosen : '',
					}}
				/>

				<div
					className={styles.colorBlock}
					onClick={() => colorChosen('blue')}
					style={{
						background: '#b4cfe7',
						border: previewDetails.color === hexColor['blue'] ? chosen : '',
					}}
				/>

				<div
					className={styles.colorBlock}
					onClick={() => colorChosen('yellow')}
					style={{
						background: '#f4b721',
						border: previewDetails.color === hexColor['yellow'] ? chosen : '',
					}}
				/>
			</div>
		</>
	)
}

export default Color
