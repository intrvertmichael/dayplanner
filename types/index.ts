interface Time {
	hours: number
	mins: number
	pm: boolean
}

export interface DayEvent {
	id: number
	label: string
	icon: string
	time_start: Time
	time_end: Time
	color: string
	preview?: boolean
}

export interface FormProps {
	previewDetails: DayEvent
	setPreviewDetails: React.Dispatch<React.SetStateAction<DayEvent>>
}
