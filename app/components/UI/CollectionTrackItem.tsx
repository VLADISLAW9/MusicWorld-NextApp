import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusic } from '@/app/types/IMusic'
import { FC, useEffect, useState } from 'react'
import { BsFillHeartFill, BsPauseFill, BsPlayFill } from 'react-icons/bs'

interface CollectionTrackProps {
	mus: IMusic
	index: number
}

const CollectionTrackItem: FC<CollectionTrackProps> = ({ mus, index }) => {
	const [isHover, setIsHover] = useState(false)
	const { activeTrack, stateTrack } = useAppSelector(state => state.player)
	const [isPlay, setIsPlay] = useState(false)
	const { setActiveTrack, playTrack, pauseTrack, removeToFav } = useActions()
	const { favorites } = useAppSelector(state => state.favoritesSlice)
	const [isFav, setIsFav] = useState(favorites.includes(mus))

	useEffect(() => {
		setIsFav(favorites.filter(i => i._id === mus._id).length > 0)
	})

	useEffect(() => {
		if (activeTrack) {
			if (mus.name === activeTrack.name) {
				if (!stateTrack) {
					setIsPlay(false)
				} else {
					setIsPlay(true)
				}
			} else {
				setIsPlay(false)
			}
		} else {
			setIsPlay(false)
		}
	}, [activeTrack, stateTrack])

	const play = (e: any) => {
		e.stopPropagation()
		if (activeTrack) {
			if (mus.name === activeTrack.name) {
				playTrack()
				setIsPlay(true)
			} else setActiveTrack(mus)
		} else {
			playTrack()
			setIsPlay(true)
			setActiveTrack(mus)
		}
	}

	const stop = (e: any) => {
		e.stopPropagation()
		pauseTrack()
		setIsPlay(false)
	}

	return (
		<li
			onMouseEnter={() => {
				setIsHover(true)
			}}
			onMouseLeave={() => {
				setIsHover(false)
			}}
			className='relative flex p-2 cursor-pointer border-2 cursor-pointer border-[#181818] hover:border-[#FFCC00]'
		>
			<div
				className={
					isHover
						? 'opacity-0 d-track__start-column text-white/50 font-light'
						: 'd-track__start-column text-white/50 font-light'
				}
			>
				{index + 1}
			</div>
			{isHover && (
				<>
					{!isPlay ? (
						<button
							onClick={play}
							className='absolute bg-[#FFCC00] rounded-full p-[5px] top-[7px] left-[4px] opacity-80 hover:opacity-100 transition-opacity'
						>
							<BsPlayFill
								className='translate-x-px
							'
							/>
						</button>
					) : (
						<button
							onClick={stop}
							className='absolute bg-[#FFCC00] rounded-full p-[5px] top-[7px] left-[4px] opacity-80 hover:opacity-100 transition-opacity'
						>
							<BsPauseFill
								className='
							'
							/>
						</button>
					)}
				</>
			)}
			<div className='d-track__name text-white'>{mus.name}</div>
			<div className='d-track__artist'>
				<div className='flex'>
					<div className='text-white d-track__name'>{mus.author}</div>
					<div className='d-track__moreinfo'>
						<button
							onClick={() => {
								removeToFav(mus)
								setIsFav(false)
							}}
						>
							<BsFillHeartFill
								className={
									isHover
										? 'translate-y-1 w-5 h-5 text-[#FFCC00] hover:text-[#FFCC00]/50 transition-colors '
										: 'translate-y-1 w-5 h-5 text-white/50'
								}
							/>
						</button>
					</div>
					<div
						className={
							isHover
								? 'text-white opacity-0 font-light'
								: 'text-white/50 font-light'
						}
					>
						1:40
					</div>
				</div>
			</div>
		</li>
	)
}

export default CollectionTrackItem
