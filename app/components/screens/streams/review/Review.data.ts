import { music } from '@/app/assets/data/music'
import { AiOutlineSound } from 'react-icons/ai'
import { BsSoundwave } from 'react-icons/bs'
import { GiBackwardTime, GiEarthAfricaEurope } from 'react-icons/gi'
import { IReviewItem } from './review-item/ReviewItem.interface'

export const review_items: IReviewItem[] = [
	{
		_id: 1,
		name: 'My wave',
		backgroundColor: '255,102,101',
		tracks: [...music],
		icon: BsSoundwave
	},
	{
		_id: 2,
		name: 'New sound',
		backgroundColor: '255,147,68',
		tracks: music.filter(mus => mus.release >= 2023),
		icon: AiOutlineSound
	},
	{
		_id: 3,
		name: 'Hits of the past',
		backgroundColor: '165,201,75',
		tracks: music.filter(mus => mus.release < 2023),
		icon: GiBackwardTime
	},
	{
		_id: 4,
		name: 'Foreign',
		backgroundColor: '255,176,207',
		tracks: music.filter(mus => mus.country === 'English'),
		icon: GiEarthAfricaEurope
	}
]
