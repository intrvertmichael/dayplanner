import { FormProps } from '../../types'

const Text = ({ previewDetails, setPreviewDetails }: FormProps) => {
	return (
		<>
			<label>Event Label:</label>
			<input
				type='text'
				value={previewDetails.label}
				onFocus={() => {
					if (previewDetails.label === 'Enter the Event Label here...') {
						setPreviewDetails({
							...previewDetails,
							label: '',
						})
					}
				}}
				onBlur={() => {
					if (previewDetails.label === '') {
						setPreviewDetails({
							...previewDetails,
							label: 'Enter the Event Label here...',
						})
					}
				}}
				onChange={(e) => {
					setPreviewDetails({
						...previewDetails,
						label: e.target.value,
					})
				}}
			/>
		</>
	)
}

export default Text
