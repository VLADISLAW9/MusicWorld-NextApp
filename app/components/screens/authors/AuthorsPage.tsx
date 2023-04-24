import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IAuthorProps } from '@/pages/author/[id]'
import { Avatar } from '@mui/material'
import { FC, useEffect, useState } from 'react'
import { BiHeart, BiPause, BiPlay } from 'react-icons/bi'
import Layout from '../../layout/Layout'
import AlbumsBlock from './blocks/AlbumsBlock'
import MainBlock from './blocks/MainBlock'
import SimilarBlock from './blocks/SimilarBlock'
import TracksBlock from './blocks/TracksBlock'
import AuthorMenu from './menu/AuthorMenu'

const AuthorsPage: FC<IAuthorProps> = ({ author }) => {
	const { activeAuthorPageBlock } = useAppSelector(
		state => state.handleAuthorPageBlock
	)
	const [playAuthorState, setPlayAuthorState] = useState(false)

	const { favoritesAuthors } = useAppSelector(state => state.favoritesAuthor)

	const [isFav, setIsFav] = useState(favoritesAuthors.includes(author))

	const { activePlaylist, stateTrack } = useAppSelector(state => state.player)

	const {
		playTrack,
		setActiveTrack,
		setActivePlaylist,
		pauseTrack,
		addAuthorToFav,
		removeAuthorToFav
	} = useActions()

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
		<Layout>
			<div className='px-[30px] py-[20px] mt-3'>
				<div className='flex'>
					<Avatar className='w-52 h-52' alt='user' src={author.avatar} />
					<div className='ml-10 flex flex-col justify-between'>
						<div>
							<p className='text-white/40 font-light text-xl'>Artist</p>
							<h1 className='text-4xl font-bold text-white mt-3'>
								{author.name}
							</h1>
						</div>
						<ul className='flex gap-3 items-center'>
							<li>
								{playAuthorState ? (
									<button
										onClick={stop}
										className=' text-[#433E28] hover:text-black transition-all flex items-center px-3 py-2 bg-[#FFDB4D] hover:bg-[#FFCC00] rounded-full'
									>
										<BiPause className='w-7 h-7' />
										<h1 className='font-normal text-black'>Listen</h1>
									</button>
								) : (
									<button
										onClick={play}
										className=' text-[#433E28] hover:text-black transition-all flex items-center px-3 py-2 bg-[#FFDB4D] hover:bg-[#FFCC00] rounded-full'
									>
										<BiPlay className='w-7 h-7' />
										<h1 className='font-normal text-black'>Listen</h1>
									</button>
								)}
							</li>
							<li>
								{!isFav ? (
									<button
										onClick={() => {
											addAuthorToFav(author)
											setIsFav(true)
										}}
										className='flex px-3 py-2 border-[#808080] hover:text-white hover:border-white transition-all border rounded-full text-[#808080]'
									>
										<BiHeart className='w-6 h-6' />
										<h1 className='font-normal ml-2'>Add to like</h1>
									</button>
								) : (
									<button
										onClick={() => {
											removeAuthorToFav(author)
											setIsFav(false)
										}}
										className='flex px-3 py-2  text-white border-white transition-all border rounded-full '
									>
										<BiHeart className='w-6 h-6' />
										<h1 className='font-normal ml-2'>Remove from like</h1>
									</button>
								)}
							</li>
						</ul>
					</div>
				</div>
				<AuthorMenu />
				{activeAuthorPageBlock === 'Main' && <MainBlock author={author} />}
				{activeAuthorPageBlock === 'Tracks' && <TracksBlock />}
				{activeAuthorPageBlock === 'Albums' && <AlbumsBlock />}
				{activeAuthorPageBlock === 'Similar' && <SimilarBlock />}
			</div>
		</Layout>
	)
}

export default AuthorsPage
