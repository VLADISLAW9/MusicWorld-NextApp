import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IAuthor } from '@/app/types/IAuthor'
import { CardMedia } from '@mui/material'
import Link from 'next/link'
import { FC, useEffect, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import { BsHeart, BsShare } from 'react-icons/bs'

interface IAuthorItemProps {
	author: IAuthor
}

const AuthorItem: FC<IAuthorItemProps> = ({ author }) => {
	const [hover, setHover] = useState(false)
	const {
		playTrack,
		pauseTrack,
		setActiveTrack,
		addAuthorToFav,
		removeAuthorToFav,
		setActivePlaylist
	} = useActions()
	const { stateTrack, activePlaylist } = useAppSelector(state => state.player)

	const { favoritesAuthors } = useAppSelector(state => state.favoritesAuthor)

	const [isFav, setIsFav] = useState(favoritesAuthors.includes(author))

	const [playAuthorState, setPlayAuthorState] = useState(false)

	useEffect(() => {
		setIsFav(favoritesAuthors.filter(i => i._id === author._id).length > 0)
	})

	useEffect(() => {
		if (activePlaylist) {
			if (author._id == activePlaylist._id) {
				if (!stateTrack) {
					setPlayAuthorState(false)
				} else {
					setPlayAuthorState(true)
				}
			} else {
				setPlayAuthorState(false)
			}
		} else {
			setPlayAuthorState(false)
		}
	}, [activePlaylist, stateTrack])

	const play = () => {
		if (author.tracks.length > 0) {
			if (activePlaylist) {
				if (author._id === activePlaylist._id) {
					playTrack()
					setPlayAuthorState(true)
				} else {
					setActiveTrack(author.tracks[0])
					playTrack()
					setActivePlaylist(author)
				}
			} else {
				setActiveTrack(author.tracks[0])
				setActivePlaylist(author)
				playTrack()
				setPlayAuthorState(true)
			}
		}
	}

	const stop = () => {
		pauseTrack()
		setPlayAuthorState(false)
	}

	return (
		<li
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false)
			}}
			className=' hover:cursor-pointer relative list-none'
		>
			<CardMedia
				component='img'
				className={hover ? 'opacity-70 rounded-full ' : 'rounded-full'}
				sx={{ height: 200, width: 200 }}
				image={author.avatar}
				alt='Paella dish'
			/>
			<Link
				href={`/author/${author._id}`}
				className='hover:text-white/40 cursor-pointer text-white transition-all'
			>
				<h1 className='mt-2 text-center'>{author.name}</h1>
			</Link>
			{hover && (
				<ul className='absolute flex items-center top-[75px] left-[15px] gap-3'>
					<li>
						{!isFav ? (
							<button
								onClick={() => {
									addAuthorToFav(author)
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
									removeAuthorToFav(author)
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
						{!playAuthorState ? (
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

export default AuthorItem
