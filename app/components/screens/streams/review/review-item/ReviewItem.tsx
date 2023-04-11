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
	const { setActivePlaylist, setActiveTrack, playTrack, pauseTrack } =
		useActions()

	let randTrack = Math.floor(Math.random() * data.tracks.length)


	useEffect(() => {
		if (activePlaylist) {
			if (activePlaylist._id === data._id) {
				setIsPlaying(true)
			} else {
				setIsPlaying(false)
			}
		}
	}, [activePlaylist])

	const play = () => {
		if (activePlaylist) {
			if (data._id === activePlaylist._id) {
				playTrack()
				setIsPlaying(true)
			} else {
				setActiveTrack(data.tracks[randTrack])
				playTrack()
				setActivePlaylist(data)
			}
		} else {
			setActiveTrack(data.tracks[randTrack])
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
				className={
					isPlaying
						? 'reviewItemAnimate relative cursor-pointer hover:scale-110  transition-all  rounded-full flex justify-center items-center'
						: 'relative cursor-pointer hover:scale-110  transition-all  rounded-full flex justify-center items-center'
				}
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
