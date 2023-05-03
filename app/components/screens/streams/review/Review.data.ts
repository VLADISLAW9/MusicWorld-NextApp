import { music } from '@/app/assets/data/music'
import { AiOutlineSound } from 'react-icons/ai'
import { BsSoundwave } from 'react-icons/bs'
import { GiBackwardTime, GiEarthAfricaEurope } from 'react-icons/gi'
import { IReviewItem } from './review-item/ReviewItem.interface'

const myWaveArray = music.sort(() => Math.random() - 0.5)
const newSoundArray = music
	.filter(mus => mus.release >= 2023)
	.sort(() => Math.random() - 0.5)
const hitsOfThePastArray = music
	.filter(mus => mus.release < 2023)
	.sort(() => Math.random() - 0.5)
const foreignArray = music
	.filter(mus => mus.country === 'English')
	.sort(() => Math.random() - 0.5)

export const review_items: IReviewItem[] = [
	{
		_id: 101,
		name: 'My wave',
		backgroundColor: '255,102,101',
		tracks: myWaveArray,
		icon: BsSoundwave
	},
	{
		_id: 202,
		name: 'New sound',
		backgroundColor: '255,147,68',
		tracks: newSoundArray,
		icon: AiOutlineSound
	},
	{
		_id: 303,
		name: 'Hits of the past',
		backgroundColor: '165,201,75',
		tracks: hitsOfThePastArray,
		icon: GiBackwardTime
	},
	{
		_id: 404,
		name: 'Around the world',
		backgroundColor: '255,176,207',
		tracks: foreignArray,
		icon: GiEarthAfricaEurope
	}
]
