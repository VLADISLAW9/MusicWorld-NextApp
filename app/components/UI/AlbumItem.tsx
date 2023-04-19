import { useActions } from '@/app/hooks/actions.hook'
import { useOutside } from '@/app/hooks/outside.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IAuthor } from '@/app/types/IAuthor'
import { IPlaylist } from '@/app/types/IPlaylist'
import { CardMedia } from '@mui/material'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import { BsHeart, BsShare } from 'react-icons/bs'

interface IAlbumProps {
	author: IAuthor
	album: IPlaylist
}

const AlbumItem: FC<IAlbumProps> = ({ album, author }) => {
	const [hover, setHover] = useState(false)
	const [isFav, setIsFav] = useState(false)
	const [isPlaying, setIsPlaying] = useState(false)
	const { openPlaylistMenu } = useActions()
	const { setActiveTrack, setActivePlaylist, playTrack, pauseTrack } =
		useActions()
	const { ref, isShow, setIsShow } = useOutside(false)
	const { activePlaylistMenu } = useAppSelector(state => state.playlistMenu)
	const { stateTrack, activePlaylist } = useAppSelector(state => state.player)

	useEffect(() => {
		if (activePlaylist) {
			if (album._id === activePlaylist._id) {
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
		if (album.tracks.length > 0) {
			if (activePlaylist) {
				if (album._id === activePlaylist._id) {
					playTrack()
					setIsPlaying(true)
				} else {
					setActiveTrack(album.tracks[0])
					playTrack()
					setActivePlaylist(album)
				}
			} else {
				setActiveTrack(album.tracks[0])
				setActivePlaylist(album)
				playTrack()
				setIsPlaying(true)
			}
		}
	}

	const stop = () => {
		pauseTrack()
		setIsPlaying(false)
	}

	const openPlaylist = () => {
		openPlaylistMenu({
			_id: album._id,
			name: album.name,
			tracks: album.tracks
		})
	}

	const addToFav = () => {}

	const removeFromFav = () => {}

	return (
		<li
			onClick={openPlaylist}
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false)
			}}
			className=' hover:cursor-pointer relative list-none'
		>
			<CardMedia
				component='img'
				className={hover ? 'opacity-70 ' : ''}
				sx={{ height: 200, width: 200 }}
				image={album.image}
				alt='Paella dish'
			/>
			<h1 className='mt-2 text-white'>{album.name}</h1>
			<Link
				href={`/author/${author._id}`}
				className='hover:text-white cursor-pointer text-sm text-white/40 font-light'
			>
				{album.author}
			</Link>
			{hover && (
				<ul className='absolute flex items-center top-[75px] left-[15px] gap-3'>
					<li>
						{!isFav ? (
							<button
								className='bg-stone-800/95 p-3 scale-90
						rounded-full text-white/50 hover:text-white hover:scale-100 transition-all hover:bg-stone-800'
							>
								<BsHeart className='w-6 h-6' />
							</button>
						) : (
							<button
								className='bg-stone-800/95 p-3 scale-90
						rounded-full text-[#FFCC00] hover:text-[#FFCC00] hover:scale-100 transition-all hover:bg-stone-800'
							>
								<BsHeart className='w-6 h-6' />
							</button>
						)}
					</li>
					<li>
						{!isPlaying ? (
							<button className='bg-[#FFCC00]/95 p-3  scale-110 rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 hover:scale-125 transition-all'>
								<BiPlay className='w-6 h-6 translate-x-0.5' />
							</button>
						) : (
							<button className='bg-[#FFCC00]/95 p-3  scale-110 rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 hover:scale-125 transition-all'>
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

export default AlbumItem
