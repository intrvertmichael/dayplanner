import { getTotalTime } from '../Event'
import { DayEvent, validation } from '../../types'
import { Dispatch, SetStateAction } from 'react'

export function hasErrors(
	previewDetails: DayEvent,
	setValidator: Dispatch<SetStateAction<validation>>,
) {
	const totalStartTime: number = getTotalTime(previewDetails.time_start)
	const totalEndTime: number = getTotalTime(previewDetails.time_end)
	const length = totalEndTime - totalStartTime

	console.log('previewDetails', previewDetails)

	setValidator({
		icon: previewDetails.icon === '🙂' ? true : false,
		label:
			previewDetails.label === 'Enter the Event Label here...' ? true : false,
		color: previewDetails.color === '' ? true : false,
		time_start: false,
		time_end: length < 0 ? true : false,
	})

	return true
}
