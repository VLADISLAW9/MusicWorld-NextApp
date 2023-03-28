import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'
import { MdClose } from 'react-icons/md'
import PlaylistMenuItem from './PlaylistMenuItem'

const PlaylistMenu: FC = () => {
	
	const { closePlaylistMenu } = useActions()
	const { activePlaylist } = useAppSelector(state => state.playlistMenu)
	const { favorites } = useAppSelector(state => state.favoritesSlice)

	return (
		<div className='z-40 p-3 w-[400px] absolute top-24 bottom-48 bg-[#181818] right-[15rem]'>
			<button onClick={() => closePlaylistMenu()} className='float-right'>
				<MdClose className='w-6 h-6 text-[#ABABAB]' />
			</button>
			<h1 className='text-white/50 font-light '>PLAYLIST</h1>
			<h1 className='text-2xl text-white'>{activePlaylist?.name}</h1>
			<ul className='mt-10'>
				{activePlaylist?._id === 3232
					? favorites.map((i, index) => (
							<PlaylistMenuItem
								favPlaylist={true}
								key={i._id}
								i={i}
								index={index}
							/>
					  ))
					: activePlaylist?.tracks.map((i, index) => (
							<PlaylistMenuItem key={i._id} i={i} index={index} />
					  ))}
				{}
			</ul>
		</div>
	)
}

export default PlaylistMenu
