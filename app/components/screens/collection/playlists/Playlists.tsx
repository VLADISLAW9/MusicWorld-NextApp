import CreatePlaylist from '@/app/components/UI/CreatePlaylist'
import FavouritePlaylist from '@/app/components/UI/FavouritePlaylist'
import PlaylistItem from '@/app/components/UI/PlaylistItem'
import PlaylistMenu from '@/app/components/UI/PlaylistMenu'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'

const Playlists: FC = () => {
	const { statePlaylistMenu } = useAppSelector(state => state.playlistMenu)
	const { creatingPlaylistArray } = useAppSelector(
		state => state.creatingPlaylist
	)

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
				<CreatePlaylist />
				{creatingPlaylistArray.map((playlist, index) => (
					<PlaylistItem key={playlist._id} playlist={playlist} />
				))}
			</ul>
		</div>
	)
}

export default Playlists
