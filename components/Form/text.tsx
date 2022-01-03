import { useState, useEffect } from 'react'
import { FormProps } from '../../types'

const Text = ({ previewDetails, setPreviewDetails }: FormProps) => {
	const [currentText, setCurrentText] = useState('')

	useEffect(() => {
		console.log('currentText', currentText)
	}, [currentText])

	return (
		<>
			<label>Event Label:</label>
			<input
				type='text'
				placeholder='Enter the Event Label here...'
				onChange={(e) => {
					if (e.target.value === '') {
						setPreviewDetails({
							...previewDetails,
							label: 'This is the Event Label',
						})
					} else {
						setPreviewDetails({
							...previewDetails,
							label: e.target.value,
						})
					}
				}}
			/>
		</>
	)
}

export default Text
