import { music } from '@/app/assets/data/music'
import { AiOutlineHeart } from 'react-icons/ai'
import {
	BsEmojiSunglassesFill,
	BsFillEmojiExpressionlessFill,
	BsFillEmojiFrownFill,
	BsFillEmojiLaughingFill
} from 'react-icons/bs'
import { FaHandRock } from 'react-icons/fa'
import { GiEarthAfricaEurope, GiMineExplosion } from 'react-icons/gi'
import { SlEnergy } from 'react-icons/sl'
import { IReviewItem } from '../review/review-item/ReviewItem.interface'

const sad = music.filter(
	m =>
		m.name === 'Добро' ||
		m.name === 'Отпускай' ||
		m.name === 'Дворы' ||
		m.name === 'Пластинки'
)

const chill = music.filter(
	m =>
		m.name === 'Пластинки' ||
		m.name === 'Дворы' ||
		m.name === 'Айтишник' ||
		m.name === 'Добро' ||
		m.name === 'Komarovo'
)

const fun = music.filter(
	m =>
		m.name === 'Саша Белый' ||
		m.name === 'УГОМОНИСЬ' ||
		m.name === 'Remedy' ||
		m.name === 'Лето' ||
		m.name === 'Бла Бла' ||
		m.name === 'Всего лишь друг'
)

const aggressive = music.filter(
	m =>
		m.name === 'УГОМОНИСЬ' ||
		m.name === 'MURDER PLOT' ||
		m.name === 'Rave in the Grave' ||
		m.name === 'Carbon'
)

const energetic = music.filter(
	m =>
		m.name === 'Саша Белый' ||
		m.name === 'ERRDAY' ||
		m.name === 'Лето' ||
		m.name === 'Carbon' ||
		m.name === 'Бла Бла' ||
		m.name === 'Ich Mag Sie' ||
		m.name === 'MURDER PLOT'
)

const cool = music.filter(
	m =>
		m.name === 'ERRDAY' ||
		m.name === 'MURDER PLOT' ||
		m.name === 'Carbon' ||
		m.name === 'Rave in the Grave' ||
		m.name === 'Ich Mag Sie' ||
		m.name === 'MURDER PLOT'
)

const epic = music.filter(
	m =>
		m.name === 'MURDER PLOT' ||
		m.name === 'Remedy' ||
		m.name === 'Carbon' ||
		m.name === 'Отпускай'
)

const love = music.filter(
	m =>
		m.name === 'Саша Белый' ||
		m.name === 'Айтишник' ||
		m.name === 'Отпускай' ||
		m.name === 'Пластинки' ||
		m.name === 'Всего лишь друг'
)

export const mood_items: IReviewItem[] = [
	{
		_id: 1,
		name: 'Sad',
		backgroundColor: '196,79,105',
		tracks: sad,
		icon: BsFillEmojiFrownFill
	},
	{
		_id: 2,
		name: 'Chill',
		backgroundColor: '89,205,156',
		tracks: chill,
		icon: BsFillEmojiExpressionlessFill
	},
	{
		_id: 3,
		name: 'Fun',
		backgroundColor: '111,195,224',
		tracks: fun,
		icon: BsFillEmojiLaughingFill
	},
	{
		_id: 4,
		name: 'Aggressive',
		backgroundColor: '228,60,49',
		tracks: aggressive,
		icon: FaHandRock
	},
	{
		_id: 5,
		name: 'Energetic',
		backgroundColor: '255,102,101',
		tracks: energetic,
		icon: SlEnergy
	},
	{
		_id: 6,
		name: 'Cool',
		backgroundColor: '108,101,169',
		tracks: cool,
		icon: BsEmojiSunglassesFill
	},
	{
		_id: 7,
		name: 'Epic',
		backgroundColor: '165,201,75',
		tracks: epic,
		icon: GiMineExplosion
	},
	{
		_id: 8,
		name: 'Love',
		backgroundColor: '255,102,101',
		tracks: love,
		icon: AiOutlineHeart
	}
]
