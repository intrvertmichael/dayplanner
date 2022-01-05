import React from 'react'

interface Props {
	previewDetails: any
	setPreviewDetails: any
	start: boolean
}

export default function Hours({
	start,
	previewDetails,
	setPreviewDetails,
}: Props) {
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
					...previewDetails.time_start,
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
			onChange={hourChanged}>
			{getHourDropDown(start, previewDetails.time_start.hours)}
		</select>
	)
}

function getHourDropDown(start: boolean, startTime: number) {
	// const limit = startTime === 0 ? 1 : startTime
	const limit = 1
	let hours = start ? 1 : limit
	let hourDropDown: JSX.Element[] = []

	while (hours <= 12) {
		hourDropDown.push(
			<option key={hours} value={hours}>
				{hours < 10 ? `0${hours}` : hours}
			</option>,
		)

		hours++
	}

	return hourDropDown
}
