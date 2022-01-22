import React from 'react'

export default function AmPm({
	start,
	setPreviewDetails,
	previewDetails,
}: {
	previewDetails: any
	setPreviewDetails: any
	start: boolean
}) {
	function amPmChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		if (start) {
			setPreviewDetails({
				...previewDetails,
				time_start: {
					...previewDetails.time_start,
					pm: e.target.value === 'pm' ? true : false,
				},
				time_end: {
					...previewDetails.time_end,
					pm: e.target.value === 'pm' ? true : false,
				},
			})
		} else {
			setPreviewDetails({
				...previewDetails,
				time_end: {
					...previewDetails.time_end,
					pm: e.target.value === 'pm' ? true : false,
				},
			})
		}
	}

	const v: string = previewDetails[start ? 'time_start' : 'time_end'].pm
		? 'pm'
		: 'am'

	return (
		<select name='min' id='min' value={v} onChange={amPmChanged}>
			<option value='am'> am </option>
			<option value='pm'> pm </option>
		</select>
	)
}
