import { useEffect, useState } from 'react'
import styles from '../../styles/Form.module.css'

interface Props {
	start: boolean
}

const Time = (props: Props) => {
	const [fulltime, setFullTime] = useState({
		hours: 1,
		mins: 0,
		pm: false,
	})

	useEffect(() => {
		let totalMins: number = 0
		totalMins += fulltime.hours * 60
		totalMins += fulltime.mins
		totalMins += fulltime.pm ? 12 * 60 : 0

		if (props.start) {
			console.log('Start Time: ', totalMins)
		} else {
			console.log('End Time: ', totalMins)
		}
	}, [fulltime, props.start])

	function hourChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		setFullTime({ ...fulltime, hours: parseInt(e.target.value) })
	}

	function minChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		setFullTime({ ...fulltime, mins: parseInt(e.target.value) })
	}

	function amPmChanged(e: React.ChangeEvent<HTMLSelectElement>) {
		setFullTime({
			...fulltime,
			pm: e.target.value === 'pm' ? true : false,
		})
	}

	return (
		<div className={styles.time}>
			<label>{props.start ? 'Start Time:' : 'End Time'}</label>

			<div className={styles.timeSelection}>
				<select name='hour' id='hour' onChange={hourChanged}>
					{getHours()}
				</select>

				<p>:</p>

				<select name='min' id='min' onChange={minChanged}>
					{getMins()}
				</select>

				<select name='min' id='min' onChange={amPmChanged}>
					<option value='am'> am </option>
					<option value='pm'> pm </option>
				</select>
			</div>
		</div>
	)
}

function getHours() {
	let hourDropDown: JSX.Element[] = []
	let hours = 1
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
