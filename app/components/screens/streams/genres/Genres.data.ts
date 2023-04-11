import { music } from '@/app/assets/data/music'
import { AiOutlineSound } from 'react-icons/ai'
import { BsHeadphones, BsSoundwave } from 'react-icons/bs'
import { CiLollipop } from 'react-icons/ci'
import { GiBackwardTime, GiBilledCap, GiEarthAfricaEurope, GiGuitar } from 'react-icons/gi'
import { MdAlbum } from 'react-icons/md'
import { TbHandRock, TbMicrophone2 } from 'react-icons/tb'
import { IReviewItem } from '../review/review-item/ReviewItem.interface'

const rap = music.filter(i => i.genre.includes('rap'))
const pop = music.filter(i => i.genre.includes('pop'))
const house = music.filter(i => i.genre.includes('house'))
const rock = music.filter(i => i.genre.includes('rock'))
const edm = music.filter(i => i.genre.includes('rap'))
const metal = music.filter(i => i.genre.includes('metal'))

export const genres_items: IReviewItem[] = [
	{
		_id: 11,
		name: 'Pop',
		backgroundColor: '157,101,169',
		tracks: pop,
		icon: CiLollipop
	},
	{
		_id: 22,
		name: 'Hip-hop',
		backgroundColor: '196,79,105',
		tracks: rap,
		icon: GiBilledCap
	},
	{
		_id: 33,
		name: 'Rock',
		backgroundColor: '55,121,188',
		tracks: rock,
		icon: GiGuitar
	},
	{
		_id: 44,
		name: 'House',
		backgroundColor: '96,79,105',
		tracks: house,
		icon: BsHeadphones
	},
	{
		_id: 55,
		name: 'EDM',
		backgroundColor: '228,60,49',
		tracks: edm,
		icon: MdAlbum
	},
	{
		_id: 66,
		name: 'Metal',
		backgroundColor: '255,187,90',
		tracks: metal,
		icon: TbHandRock
	}
]
