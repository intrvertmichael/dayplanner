import { useEffect, useState } from 'react'
import styles from '../../styles/Form.module.css'

const Color = () => {
	const [selectedColor, setSelectedColor] = useState('')

	useEffect(() => {
		console.log('Selected Color: ', selectedColor)
	}, [selectedColor])
	const chosen = '2px solid white'

	return (
		<>
			<label>Color:</label>
			<div className={styles.colors}>
				<div
					className={styles.colorBlock}
					onClick={() => setSelectedColor('red')}
					style={{
						background: '#ffafa2',
						border: selectedColor === 'red' ? chosen : '',
					}}
				/>
				<div
					className={styles.colorBlock}
					onClick={() => setSelectedColor('green')}
					style={{
						background: '#a2d39b',
						border: selectedColor === 'green' ? chosen : '',
					}}
				/>

				<div
					className={styles.colorBlock}
					onClick={() => setSelectedColor('blue')}
					style={{
						background: '#b4cfe7',
						border: selectedColor === 'blue' ? chosen : '',
					}}
				/>

				<div
					className={styles.colorBlock}
					onClick={() => setSelectedColor('yellow')}
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
