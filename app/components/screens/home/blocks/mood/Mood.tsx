import MoodItem from '@/app/components/UI/MoodItem'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'
import { BsHeadphones } from 'react-icons/bs'
import { CiLollipop } from 'react-icons/ci'
import { GiGuitar, GiMicrophone } from 'react-icons/gi'
import { MdAlbum } from 'react-icons/md'
import { TbHandRock } from 'react-icons/tb'

const Mood: FC = () => {
	const { activeGenre } = useAppSelector(state => state.handleGenre)

	return (
		<div>
			<h1 className='text-white text-xl font-semibold'>
				Find your music by genre
			</h1>
			<ul className='grid grid-cols-6 mt-8 gap-8'>
				<MoodItem genre={'Rap'} Icon={GiMicrophone} color={'#FFCC00'} />
				<MoodItem genre={'Pop'} Icon={CiLollipop} color={'#4DD1A2'} />
				<MoodItem genre={'House'} Icon={MdAlbum} color={'#28BF5B'} />
				<MoodItem genre={'Rock'} Icon={TbHandRock} color={'#A002EF'} />
				<MoodItem genre={'EDM'} Icon={BsHeadphones} color={'#016191'} />
				<MoodItem genre={'Metal'} Icon={GiGuitar} color={'#E3705D'} />
			</ul>
			<ul>
				
			</ul>
		</div>
	)
}

export default Mood
