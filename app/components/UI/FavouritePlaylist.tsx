import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC, useEffect, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import { BsHeartFill } from 'react-icons/bs'

const FavouritePlaylist: FC = () => {
	const [hover, setHover] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const { activePlaylistMenu, statePlaylistMenu } = useAppSelector(
		state => state.playlistMenu
	)
	const { activePlaylist } = useAppSelector(state => state.player)
	const { stateTrack } = useAppSelector(state => state.player)
	const { favorites } = useAppSelector(state => state.favoritesSlice)
	const {
		openPlaylistMenu,
		setActivePlaylist,
		setActiveTrack,
		playTrack,
		pauseTrack,
		playPlaylist,
		pausePlaylist
	} = useActions()

	const data = {
		_id: 3232,
		name: 'Me like',
		tracks: favorites
	}

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
		if (data.tracks.length > 0) {
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
	}

	const stop = () => {
		pauseTrack()
		setIsPlaying(false)
	}

	const openFavMenu = () => {
		openPlaylistMenu(data)
	}

	return (
		<li
			onClick={openFavMenu}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='relative cursor-pointer'
		>
			<div
				className={
					hover
						? 'opacity-70 w-[200px] h-[200px]   text-white '
						: 'w-[200px] h-[200px]  text-white'
				}
				style={{ backgroundColor: '#FF4377' }}
			>
				<div className='flex justify-end'>
					<BsHeartFill className='p-5 bg-white w-24 h-24 text-[#FF4377]' />
				</div>
			</div>
			<h1 className='mt-2 text-white font-light'>Me like</h1>
			{hover && (
				<ul className='absolute flex items-center top-[75px] left-[75px] gap-3'>
					<li>
						{!isPlaying ? (
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
				</ul>
			)}
		</li>
	)
}

export default FavouritePlaylist
