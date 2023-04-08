import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC, useEffect, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import { IReviewItem } from './ReviewItem.interface'

interface IReviewItemProps {
	data: IReviewItem
}

const ReviewItem: FC<IReviewItemProps> = ({ data }) => {
	const [isHover, setIsHover] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const { activePlaylist, activeTrack } = useAppSelector(state => state.player)
	const { playPlaylist, pausePlaylist, setActivePlaylist, setActiveTrack } =
		useActions()

	useEffect(() => {
		for (let i = 0; i < data.tracks.length; i++) {
			if (activePlaylist?._id === data._id) {
				setIsPlaying(true)
			}
		}
	}, [activePlaylist])

	const play = () => {
		setIsPlaying(true)
		setActiveTrack(data.tracks[0])
		setActivePlaylist(data)
	}

	const stop = () => {
		setIsPlaying(false)
	}

	return (
		<li>
			<div
				onMouseEnter={() => {
					setIsHover(true)
				}}
				onMouseLeave={() => {
					setIsHover(false)
				}}
				style={
					isHover
						? {
								width: '185px',
								height: '185px',
								backgroundColor: `rgba(${data.backgroundColor},0.7)`
						  }
						: {
								width: '185px',
								height: '185px',
								backgroundColor: `rgba(${data.backgroundColor})`
						  }
				}
				className='relative cursor-pointer hover:scale-110  transition-all  rounded-full flex justify-center items-center'
			>
				{isHover && (
					<div className='absolute'>
						{!isPlaying ? (
							<button
								onClick={play}
								className='bg-[#FFCC00] p-3  scale-110 rounded-full text-stone-800/90  hover:text-stone-800  transition-all'
							>
								<BiPlay className='w-6 h-6 translate-x-0.5' />
							</button>
						) : (
							<button
								onClick={stop}
								className='bg-[#FFCC00] p-3  scale-110 rounded-full text-stone-800/90 hover:text-stone-800  transition-all'
							>
								<BiPause className='w-6 h-6 	' />
							</button>
						)}
					</div>
				)}

				<data.icon className={'w-20 h-20 text-white'} />
			</div>
			<h1 className='text-center mt-3 text-white'>{data.name}</h1>
		</li>
	)
}

export default ReviewItem
