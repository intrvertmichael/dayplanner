import React, { Dispatch, SetStateAction } from 'react'
import { DayEvent } from '../../types'

export default function Hours({
	start,
	previewDetails,
	setPreviewDetails,
}: {
	previewDetails: DayEvent
	setPreviewDetails: Dispatch<SetStateAction<DayEvent>>
	start: boolean
}) {
	function hourChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		const hour = parseInt(e.target.value)
		if (start) {
			setPreviewDetails({
				...previewDetails,
				time_start: {
					...previewDetails.time_start,
					hours: hour,
				},
				time_end: {
					...previewDetails.time_start,
					hours: hour === 12 ? 1 : hour + 1,
				},
			})
		} else {
			setPreviewDetails({
				...previewDetails,
				time_end: {
					...previewDetails.time_end,
					hours: hour,
				},
			})
		}
	}

	return (
		<select
			name='hour'
			value={
				start ? previewDetails.time_start.hours : previewDetails.time_end.hours
			}
			id='hour'
			onChange={hourChanged}
		>
			{getHourDropDown()}
		</select>
	)
}

function getHourDropDown() {
	const hourDropDown: JSX.Element[] = []

	let hour = 1
	while (hour <= 12) {
		const value = hour === 12 ? 0 : hour
		hourDropDown.push(
			<option key={value} value={value}>
				{hour < 10 ? `0${hour}` : hour}
			</option>,
		)

		hour++
	}

	return hourDropDown
}
