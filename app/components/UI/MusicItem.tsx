import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusic } from '@/app/types/IMusic'
import { CardMedia } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import { BsHeart, BsShare } from 'react-icons/bs'

interface IMusicItem {
	mus: IMusic
}

const MusicItem: FC<IMusicItem> = ({ mus }) => {
	const [hover, setHover] = useState(false)
	const { playTrack, pauseTrack, setActiveTrack, addToFav, removeToFav } =
		useActions()
	const { stateTrack, activeTrack, stateMyWave } = useAppSelector(
		state => state.player
	)
	const { favorites } = useAppSelector(state => state.favoritesSlice)

	const [isFav, setIsFav] = useState(false)

	const [state, setState] = useState(false)

	console.log(favorites)

	useEffect(() => {
		setIsFav(favorites.includes(mus))
	},[favorites])

	useEffect(() => {
		if (activeTrack) {
			if (mus.name === activeTrack.name) {
				if (!stateTrack) {
					setState(false)
				} else {
					setState(true)
				}
			} else {
				setState(false)
			}
		} else {
			setState(false)
		}
	}, [activeTrack, stateTrack])

	const play = (e: any) => {
		e.stopPropagation()

		if (activeTrack) {
			if (mus.name === activeTrack.name) {
				playTrack()
				setState(true)
			} else setActiveTrack(mus)
		} else {
			setActiveTrack(mus)
			playTrack()
			setState(true)
		}
	}

	const stop = (e: any) => {
		e.stopPropagation()
		pauseTrack()
		setState(false)
	}
	return (
		<li
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='hover:cursor-pointer relative'
		>
			<CardMedia
				component='img'
				className={hover ? 'opacity-70 ' : ''}
				sx={{ height: 200, width: 200 }}
				image={mus.image}
				alt='Paella dish'
			/>
			<h1 className='mt-2 text-white'>{mus.name}</h1>
			<p className='text-sm text-white/40 font-light'>{mus.author}</p>
			{hover && (
				<ul className='absolute flex items-center top-[75px] left-[15px] gap-3'>
					<li>
						{!isFav ? (
							<button
								onClick={() => {
									addToFav(mus)
									setIsFav(true)
								}}
								className='bg-stone-800/95 p-3 scale-90
						rounded-full text-white/50 hover:text-white hover:scale-100 transition-all hover:bg-stone-800'
							>
								<BsHeart className='w-6 h-6' />
							</button>
						) : (
							<button
								onClick={() => {
									removeToFav(mus)
									setIsFav(false)
								}}
								className='bg-stone-800/95 p-3 scale-90
						rounded-full text-[#FFCC00] hover:text-[#FFCC00] hover:scale-100 transition-all hover:bg-stone-800'
							>
								<BsHeart className='w-6 h-6' />
							</button>
						)}
					</li>
					<li>
						{!state ? (
							<button
								onClick={play}
								className='bg-[#FFCC00]/95 p-3  scale-110 rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 hover:scale-125 transition-all'
							>
								<BiPlay className='w-6 h-6 translate-x-0.5' />
							</button>
						) : (
							<button
								onClick={stop}
								className='bg-[#FFCC00]/95 p-3  scale-110 rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 hover:scale-125 transition-all'
							>
								<BiPause className='w-6 h-6 	' />
							</button>
						)}
					</li>
					<li>
						<button className='bg-stone-800/95 p-3 scale-90 rounded-full text-white/50 hover:text-white hover:scale-100 transition-all hover:bg-stone-800'>
							<BsShare className='w-6 h-6' />
						</button>
					</li>
				</ul>
			)}
		</li>
	)
}

export default MusicItem
