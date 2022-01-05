import React from 'react'

interface Props {
	previewDetails: any
	setPreviewDetails: any
	start: boolean
}

export default function Mins({
	start,
	setPreviewDetails,
	previewDetails,
}: Props) {
	function minChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		setPreviewDetails({
			...previewDetails,
			[start ? 'time_start' : 'time_end']: {
				...previewDetails.time_start,
				mins: parseInt(e.target.value),
			},
		})
	}

	return (
		<select
			name='min'
			id='min'
			value={
				start ? previewDetails.time_start.mins : previewDetails.time_end.mins
			}
			onChange={minChanged}>
			{getMinDropDown()}
		</select>
	)
}

function getMinDropDown() {
	let minDropDown: JSX.Element[] = []
	let mins: number = 0
	while (mins < 60) {
		let label = `${mins}`
		if (mins === 0) label = '00'

		minDropDown.push(
			<option key={label} value={label}>
				{label}
			</option>,
		)

		mins += 10
	}

	return minDropDown
}
