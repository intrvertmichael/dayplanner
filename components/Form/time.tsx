import { useState } from 'react'
import styles from '../../styles/Form.module.css'
import { DayEvent } from '../../types'

interface Props {
	start: boolean
	previewDetails: DayEvent
	setPreviewDetails: React.Dispatch<React.SetStateAction<DayEvent>>
}

interface Time {
	hours: number
	mins: number
	pm: boolean
}

const Time = ({ start, previewDetails, setPreviewDetails }: Props) => {
	const [fulltime, setFullTime] = useState<Time>({
		hours: start ? 12 : Math.round(previewDetails.startTime / 60),
		mins: 0,
		pm: false,
	})

	function updatePreview(updatedTime: Time) {
		let totalMins: number = 0
		totalMins += updatedTime.hours * 60
		totalMins += updatedTime.mins
		totalMins += updatedTime.pm ? 12 * 60 : 0

		if (start) {
			setPreviewDetails({
				...previewDetails,
				startTime: totalMins,
				endTime: totalMins + 30,
			})
		} else {
			setPreviewDetails({
				...previewDetails,
				endTime: totalMins,
			})
		}
	}

	function hourChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		if (start) {
			setFullTime({ ...fulltime, hours: parseInt(e.target.value) })
			updatePreview({ ...fulltime, hours: parseInt(e.target.value) })
		} else {
			setFullTime({ ...fulltime, hours: parseInt(e.target.value) })
			updatePreview({ ...fulltime, hours: parseInt(e.target.value) })
		}
	}

	function minChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		setFullTime({ ...fulltime, mins: parseInt(e.target.value) })
		updatePreview({ ...fulltime, mins: parseInt(e.target.value) })
	}

	function amPmChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		setFullTime({
			...fulltime,
			pm: e.target.value === 'pm' ? true : false,
		})
		updatePreview({
			...fulltime,
			pm: e.target.value === 'pm' ? true : false,
		})
	}

	const hours = start
		? Math.floor(previewDetails.startTime / 60)
		: Math.floor(previewDetails.endTime / 60)

	const mins = start
		? previewDetails.startTime % 60
		: previewDetails.endTime % 60

	return (
		<div className={styles.time}>
			<label>{start ? 'Start Time:' : 'End Time'}</label>

			<div className={styles.timeSelection}>
				<select name='hour' value={hours} id='hour' onChange={hourChanged}>
					{getHours(start, previewDetails.startTime)}
				</select>

				<p>:</p>

				<select name='min' id='min' value={mins} onChange={minChanged}>
					{getMins()}
				</select>

				<select
					name='min'
					id='min'
					value={fulltime.pm ? 'pm' : 'am'}
					onChange={amPmChanged}>
					<option value='am'> am </option>
					<option value='pm'> pm </option>
				</select>
			</div>
		</div>
	)
}

function getHours(start: boolean, startTime: number) {
	let limit = Math.round(startTime / 60)
	if (limit === 24) limit = 1
	else if (limit > 12) limit = limit - 12
	else if (limit === 0) limit = 12

	let hourDropDown: JSX.Element[] = []
	let hours = start ? 1 : limit
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

function getMins() {
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

		mins += 15
	}

	return minDropDown
}

export default Time
