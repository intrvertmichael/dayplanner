export interface DayEvent {
	id: number
	label: string
	icon: string
	startTime: number
	endTime: number
	color: string
	preview?: boolean
}

export interface FormProps {
	previewDetails: DayEvent
	setPreviewDetails: React.Dispatch<React.SetStateAction<DayEvent>>
}
