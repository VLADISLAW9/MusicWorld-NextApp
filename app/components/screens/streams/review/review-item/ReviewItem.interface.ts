import { IMusic } from '@/app/types/IMusic'
import { IconType } from 'react-icons/lib'

export interface IReviewItem {
	_id: number
	name: string
	backgroundColor: string
	tracks: IMusic[]
	icon: IconType
}
