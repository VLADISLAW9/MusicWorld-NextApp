import FavouritePlaylist from '@/app/components/UI/FavouritePlaylist'
import PlaylistMenu from '@/app/components/UI/PlaylistMenu'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'

const Playlists: FC = () => {
	const { statePlaylistMenu } = useAppSelector(state => state.playlistMenu)

	return (
		<div>
			<h1
				className='text-white text-xl 
			font-semibold'
			>
				Playlist
			</h1>
			{statePlaylistMenu && <PlaylistMenu />}
			<ul className='grid grid-cols-6 mt-5 gap-8'>
				<FavouritePlaylist />
			</ul>
		</div>
	)
}

export default Playlists
