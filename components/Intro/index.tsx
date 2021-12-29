import styles from '../../styles/Intro.module.css'

const Intro = () => {
	const days = [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
	]
	const months = [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December',
	]

	const d = new Date()
	const month = months[d.getMonth()]
	const date = d.getDate()
	const year = d.getFullYear()
	const day = days[d.getDay()]

	const fullDate = `${day} _ ${month} ${date}, ${year}`

	return (
		<div className={styles.intro}>
			<h1>Day Planner</h1>
			<p>{fullDate}</p>
		</div>
	)
}

export default Intro
