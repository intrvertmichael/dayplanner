import { Dispatch, SetStateAction } from 'react'

export interface Time {
	hours: number
	mins: number
	pm: boolean
}

export interface validation {
	label: boolean
	icon: boolean
	time_start: boolean
	time_end: boolean
	color: boolean
}

export interface DayEvent {
	id?: number
	label: string
	icon: string
	time_start: Time
	time_end: Time
	color: string
	preview?: boolean
}

export interface FormProps {
	validator: validation
	setValidator: Dispatch<SetStateAction<validation>>
	previewDetails: DayEvent
	setPreviewDetails: React.Dispatch<React.SetStateAction<DayEvent>>
}
