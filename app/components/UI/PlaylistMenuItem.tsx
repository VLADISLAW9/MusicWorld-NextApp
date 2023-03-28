import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusic } from '@/app/types/IMusic'
import { FC, useEffect, useState } from 'react'
import { BiHeart, BiPause, BiPlay } from 'react-icons/bi'

interface IPlaylistMenuItem {
	i: IMusic
	index: number
	favPlaylist?: boolean
}

const PlaylistMenuItem: FC<IPlaylistMenuItem> = ({ index, i, favPlaylist }) => {
	const {
		playTrack,
		pauseTrack,
		setActiveTrack,
		removeToFav,
		removeTrackFromPlaylist
	} = useActions()
	const { activeTrack, stateTrack } = useAppSelector(state => state.player)
	const [hover, setHover] = useState(false)
	const [musicState, setMusicState] = useState(false)
	const { activePlaylist } = useAppSelector(state => state.playlistMenu)
	const { favorites } = useAppSelector(state => state.favoritesSlice)

	useEffect(() => {
		if (activeTrack) {
			if (i.name === activeTrack.name) {
				if (!stateTrack) {
					setMusicState(false)
				} else {
					setMusicState(true)
				}
			} else {
				setMusicState(false)
			}
		} else {
			setMusicState(false)
		}
	}, [activeTrack, stateTrack])

	const play = (e: any) => {
		e.stopPropagation()

		if (activeTrack) {
			if (i.name === activeTrack.name) {
				playTrack()
				setMusicState(true)
			} else setActiveTrack(i)
		} else {
			playTrack()
			setMusicState(true)
			setActiveTrack(i)
		}
	}

	const stop = (e: any) => {
		e.stopPropagation()
		pauseTrack()
		setMusicState(false)
	}

	const removeTrack = () => {
		if (favPlaylist) {
			removeToFav(i)
		} else {
			removeTrackFromPlaylist(i)
		}
	}

	return (
		<div
			onMouseEnter={() => {
				setHover(true)
			}}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='hover:cursor-pointer relative p-2 flex mb-5'
			key={i._id}
		>
			<p className='text-white/50'>{index + 1}</p>

			<h1 className='text-white ml-4'>
				{i.name} <span className='text-white/50'>- {i.author}</span>
			</h1>
			{hover && (
				<div className=''>
					{!musicState ? (
						<button
							onClick={play}
							className='bg-[#FFCC00]/95 p-1 rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 transition-all left-[-0.1rem] top-[6px] absolute'
						>
							<BiPlay className='w-5 h-5' />
						</button>
					) : (
						<button
							onClick={stop}
							className='bg-[#FFCC00]/95 p-1 rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 transition-all left-[-0.1rem] top-[6px] absolute'
						>
							<BiPause className='w-5 h-5' />
						</button>
					)}

					<button
						onClick={removeTrack}
						className='absolute right-10 text-[#FFCC00]'
					>
						<BiHeart className='w-5 h-5' />
					</button>
				</div>
			)}
		</div>
	)
}

export default PlaylistMenuItem
