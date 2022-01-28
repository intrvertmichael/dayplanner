import React, { Dispatch, SetStateAction } from 'react'
import { DayEvent } from '../../types'

export default function Mins({
	start,
	setPreviewDetails,
	previewDetails,
}: {
	previewDetails: DayEvent
	setPreviewDetails: Dispatch<SetStateAction<DayEvent>>
	start: boolean
}) {
	function minChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		if (start) {
			setPreviewDetails({
				...previewDetails,
				time_start: {
					...previewDetails.time_start,
					mins: parseInt(e.target.value),
				},
			})
		} else {
			setPreviewDetails({
				...previewDetails,
				time_end: {
					...previewDetails.time_end,
					mins: parseInt(e.target.value),
				},
			})
		}
	}

	return (
		<select
			name='min'
			id='min'
			value={
				start ? previewDetails.time_start.mins : previewDetails.time_end.mins
			}
			onChange={minChanged}
		>
			{getMinDropDown()}
		</select>
	)
}

function getMinDropDown() {
	const minDropDown: JSX.Element[] = []
	let mins = 0
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
