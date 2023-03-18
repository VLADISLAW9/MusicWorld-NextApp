import MoodItem from '@/app/components/UI/MoodItem'
import MusicItem from '@/app/components/UI/MusicItem'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusicProps } from '@/pages'
import { FC } from 'react'
import { BsHeadphones } from 'react-icons/bs'
import { CiLollipop } from 'react-icons/ci'
import { GiGuitar, GiMicrophone } from 'react-icons/gi'
import { MdAlbum } from 'react-icons/md'
import { TbHandRock } from 'react-icons/tb'

const Mood: FC<IMusicProps> = ({ music }) => {
	const { activeGenre } = useAppSelector(state => state.handleGenre)

	const rap = music.filter(i => i.genre.includes('rap'))
	const pop = music.filter(i => i.genre.includes('pop'))
	const house = music.filter(i => i.genre.includes('house'))
	const rock = music.filter(i => i.genre.includes('rock'))
	const edm = music.filter(i => i.genre.includes('rap'))
	const metal = music.filter(i => i.genre.includes('metal'))

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
			<h1 className='text-white text-xl font-semibold mt-10'>{activeGenre}</h1>
			{activeGenre ? (
				<ul className='text-center grid grid-cols-6 mt-8 gap-8'>
					{activeGenre === 'Rap' ? (
						rap.map(i => <MusicItem key={i._id} mus={i} />)
					) : activeGenre === 'Pop' ? (
						pop.map(i => <MusicItem key={i._id} mus={i} />)
					) : activeGenre === 'House' ? (
						house.map(i => <MusicItem key={i._id} mus={i} />)
					) : activeGenre === 'Rock' ? (
						rock.map(i => <MusicItem key={i._id} mus={i} />)
					) : activeGenre === 'EDM' ? (
						edm.map(i => <MusicItem key={i._id} mus={i} />)
					) : activeGenre === 'Metal' ? (
						metal.map(i => <MusicItem key={i._id} mus={i} />)
					) : (
						<></>
					)}
				</ul>
			) : (
				<h1 className='text-white/50 text-2xl opacity-70 flex justify-center mt-40 mb-32'>
					Choose the genre you want to see
				</h1>
			)}
		</div>
	)
}

export default Mood
