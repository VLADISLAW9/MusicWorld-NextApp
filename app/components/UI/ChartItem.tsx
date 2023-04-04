import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusic } from '@/app/types/IMusic'
import { CardMedia } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { BiHeart } from 'react-icons/bi'
import { BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { TbCrown } from 'react-icons/tb'

interface IChartItem {
	track: IMusic
	index: number
	hideCrown?: boolean
}

const ChartItem: FC<IChartItem> = ({ track, index, hideCrown }) => {
	const [hover, setHover] = useState(false)
	const { playTrack, pauseTrack, setActiveTrack, addToFav, removeToFav } =
		useActions()
	const { activeTrack, stateTrack } = useAppSelector(state => state.player)
	const [state, setState] = useState(false)
	const { favorites } = useAppSelector(state => state.favoritesSlice)

	const [isFav, setIsFav] = useState(false)

	useEffect(() => {
		if (activeTrack) {
			if (track.name === activeTrack.name) {
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
			if (track.name === activeTrack.name) {
				playTrack()
				setState(true)
			} else setActiveTrack(track)
		} else {
			playTrack()
			setState(true)
			setActiveTrack(track)
		}
	}

	const stop = (e: any) => {
		e.stopPropagation()
		pauseTrack()
		setState(false)
	}

	return (
		<li
			onMouseEnter={() => {
				setHover(true)
			}}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='px-2 py-1 border-2 cursor-pointer border-[#181818] hover:border-[#FFCC00] flex items-center justify-between'
		>
			<div className='flex items-center'>
				<div className='flex flex-col  '>
					<h1 className='mr-3 w-4 text-white font-semibold'>{index + 1}</h1>
					{!hideCrown && (
						<>
							{index + 1 === 1 && (
								<TbCrown className='w-5 h-5 -translate-x-[5px] text-[#FFCC00]' />
							)}
						</>
					)}
				</div>
				<div className='relative flex items-center '>
					<CardMedia
						className={hover ? 'opacity-60' : ''}
						component='img'
						sx={{ height: 55, width: 55 }}
						image={track.image}
						alt='Paella dish'
					/>

					<div className='ml-3 w-44'>
						<h1 className='text-white text-base'>{track.name}</h1>
						<p className='text-white/50 text-sm font-light'>{track.author}</p>
					</div>

					<div className={!hover ? 'opacity-0' : ''}>
						{!state ? (
							<button
								onClick={play}
								className='absolute bg-[#FFCC00] rounded-full p-2 top-[12px] left-[10px] opacity-80 hover:opacity-100 transition-opacity'
							>
								<BsPlayFill
									className='translate-x-px
							'
								/>
							</button>
						) : (
							<button
								onClick={stop}
								className='absolute bg-[#FFCC00] rounded-full p-2 top-[12px] left-[10px] opacity-80 hover:opacity-100 transition-opacity'
							>
								<BsPauseFill
									className='translate-x-px
							'
								/>
							</button>
						)}
					</div>
				</div>
			</div>

			<div className='flex items-center'>
				<div className={hover ? '' : 'opacity-0'}>
					{!isFav ? (
						<>
							<button
								onClick={() => {
									addToFav(track)
									setIsFav(true)
								}}
								className=''
							>
								<BiHeart className=' w-6 h-6 mt-1.5 text-[#757575] hover:text-white transition-colors ' />
							</button>{' '}
						</>
					) : (
						<>
							<button
								onClick={() => {
									removeToFav(track)
									setIsFav(false)
								}}
								className=''
							>
								<BiHeart className=' w-6 h-6 mt-1.5 text-[#FFCC00] hover:text-[#FFCC00]/80 transition-colors ' />
							</button>
						</>
					)}
				</div>
				<h1 className='text-white/50 ml-5 text-sm font-light'>1:40</h1>
			</div>
		</li>
	)
}

export default ChartItem
