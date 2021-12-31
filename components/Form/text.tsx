import { useState, useEffect } from 'react'

const Text = () => {
	const [currentText, setCurrentText] = useState('')

	useEffect(() => {
		console.log('currentText', currentText)
	}, [currentText])

	return (
		<>
			<label>Event Label:</label>
			<input type='text' onChange={(e) => setCurrentText(e.target.value)} />
		</>
	)
}

export default Text
