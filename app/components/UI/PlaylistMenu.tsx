import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC, useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import PlaylistMenuItem from './PlaylistMenuItem'

const PlaylistMenu: FC = () => {
	const [scrolled, setScrolled] = useState(false)
	const { closePlaylistMenu } = useActions()
	const { activePlaylistMenu } = useAppSelector(state => state.playlistMenu)
	const { creatingPlaylistArray } = useAppSelector(
		state => state.creatingPlaylist
	)
	const { favorites } = useAppSelector(state => state.favoritesSlice)

	const currentPlaylist = creatingPlaylistArray.filter(
		pl => pl._id === activePlaylistMenu?._id
	)[0]?.tracks

	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.pageYOffset
			console.log(scrollTop)
			if (scrollTop > 80 && !scrolled) {
				setScrolled(true)
			} else if (scrollTop === 0 && scrolled) {
				setScrolled(false)
			} else if (scrollTop < 80 && scrolled) {
				// добавляем новое условие
				setScrolled(false)
			}
		}
		window.addEventListener('scroll', handleScroll)
		return () => {
			window.removeEventListener('scroll', handleScroll)
		}
	}, [scrolled])

	return (
		<div
			className={
				scrolled
					? 'z-40 p-3 PlaylistMenu_fixed shadow-xl bg-[#181818]'
					: 'z-40 p-3 PlaylistMenu  shadow-xl bg-[#181818]'
			}
		>
			<div className=''>
				<ul className='flex justify-between'>
					<li>
						<h1 className='text-white/50 font-light '>PLAYLIST</h1>
						<h1 className='text-2xl text-white'>{activePlaylistMenu?.name}</h1>
					</li>
					<li className=''>
						<button onClick={() => closePlaylistMenu()} className=''>
							<MdClose className='w-6 h-6 text-[#ABABAB]' />
						</button>
					</li>
				</ul>

				<ul
					className={
						currentPlaylist?.length > 9 || favorites.length > 9
							? 'mt-10 overflow-y-scroll max-h-[550px] list-none'
							: 'mt-10 list-none'
					}
				>
					{activePlaylistMenu?._id === 3232
						? favorites.map((i, index) => (
								<PlaylistMenuItem
									favPlaylist={true}
									key={i._id}
									i={i}
									index={index}
								/>
						  ))
						: currentPlaylist.map((i, index) => (
								<PlaylistMenuItem key={i._id} i={i} index={index} />
						  ))}
					{}
				</ul>
			</div>
		</div>
	)
}

export default PlaylistMenu
