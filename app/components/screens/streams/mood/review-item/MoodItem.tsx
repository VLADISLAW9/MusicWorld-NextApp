import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC, useEffect, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import { IReviewItem } from '../../review/review-item/ReviewItem.interface'

interface IReviewItemProps {
	data: IReviewItem
}

const MoodItem: FC<IReviewItemProps> = ({ data }) => {
	const [isHover, setIsHover] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const { activePlaylist, activeTrack, stateTrack } = useAppSelector(
		state => state.player
	)
	const { setActivePlaylist, setActiveTrack, playTrack, pauseTrack } =
		useActions()



	console.log(data.tracks)

	useEffect(() => {
		if (activePlaylist) {
			if (data._id === activePlaylist._id) {
				if (!stateTrack) {
					setIsPlaying(false)
				} else {
					setIsPlaying(true)
				}
			} else {
				setIsPlaying(false)
			}
		} else {
			setIsPlaying(false)
		}
	}, [activePlaylist, stateTrack])

	const play = () => {
		if (activePlaylist) {
			if (data._id === activePlaylist._id) {
				playTrack()
				setIsPlaying(true)
			} else {
				setActiveTrack(data.tracks[0])
				playTrack()
				setActivePlaylist(data)
			}
		} else {
			setActiveTrack(data.tracks[0])
			setActivePlaylist(data)
			playTrack()
			setIsPlaying(true)
		}
	}

	const stop = () => {
		pauseTrack()
		setIsPlaying(false)
	}

	return (
		<li
			onMouseEnter={() => {
				setIsHover(true)
			}}
			onMouseLeave={() => {
				setIsHover(false)
			}}
			className={
				isHover
					? 'border-[#FFCC00] border-2 p-2 relative cursor-pointer flex items-center'
					: ' border-[#181818] border-2 p-2 relative cursor-pointer flex items-center'
			}
		>
			<div
				style={
					isHover
						? {
								width: '65px',
								height: '65px',
								backgroundColor: `rgba(${data.backgroundColor},0.7)`
						  }
						: {
								width: '65px',
								height: '65px',
								backgroundColor: `rgba(${data.backgroundColor})`
						  }
				}
				className={
					isPlaying
						? 'reviewItemAnimate relative cursor-pointer   transition-all  rounded-full flex justify-center items-center'
						: 'relative cursor-pointer  transition-all  rounded-full flex justify-center items-center'
				}
			>
				<data.icon className={'w-9 h-9 text-white'} />
			</div>
			<h1 className='ml-5 text-white'>{data.name}</h1>
			{(isHover || isPlaying) && (
				<div className='absolute right-5'>
					{!isPlaying ? (
						<button
							onClick={play}
							className='bg-[#FFCC00]/95 p-3  rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 transition-all'
						>
							<BiPlay className='w-6 h-6 translate-x-0.5' />
						</button>
					) : (
						<button
							onClick={stop}
							className='bg-[#FFCC00]/95 p-3  rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 transition-all'
						>
							<BiPause className='w-6 h-6' />
						</button>
					)}
				</div>
			)}
		</li>
	)
}

export default MoodItem
