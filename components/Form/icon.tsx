import { useEffect, useState } from 'react'
import styles from '../../styles/Form.module.css'

import { FormProps } from '../../types'

const Icon = ({ previewDetails, setPreviewDetails }: FormProps) => {
	const [query, setQuery] = useState('')
	const [emojis, setEmojis] = useState([])

	useEffect(() => {
		getEmojis().then((all) => setEmojis(all))
	}, [])

	async function formSubmitted(e: React.FormEvent) {
		e.preventDefault()

		let results
		if (query === '') {
			results = await getEmojis()
		} else {
			results = await searchEmojis(query)
		}

		setEmojis(results)
	}

	function emojiClicked(emoji: string) {
		setPreviewDetails({
			...previewDetails,
			icon: emoji,
		})
	}

	return (
		<div>
			<label>Icon:</label>
			<div className={styles.icon}>
				<ul>
					{emojis &&
						emojis.map((emoji, key) => {
							return (
								<li key={key} onClick={() => emojiClicked(emoji)}>
									{' '}
									{emoji}{' '}
								</li>
							)
						})}
				</ul>
			</div>

			<form className={styles.search} onSubmit={formSubmitted}>
				<input
					type='text'
					placeholder='Search for an icon here..'
					onChange={(e) => setQuery(e.target.value)}
				/>
			</form>
		</div>
	)
}

async function getEmojis() {
	const res = await fetch('https://api.emojisworld.fr/v1/popular')
	const data = await res.json()

	// TODO: fix this type to not be any
	const popular = data?.results.map((obj: any) => {
		return obj.emoji
	})

	return popular
}

async function searchEmojis(query: string) {
	console.log('query: ', query)
	const res = await fetch(`https://api.emojisworld.fr/v1/search?q=${query}`)

	console.log(res)

	const data = await res.json()

	console.log(data)

	const result = data?.results.map((obj: any) => {
		return obj.emoji
	})

	return result
}

export default Icon
