import AlbumItem from '@/app/components/UI/AlbumItem'
import CreatePlaylist from '@/app/components/UI/CreatePlaylist'
import FavouritePlaylist from '@/app/components/UI/FavouritePlaylist'
import PlaylistItem from '@/app/components/UI/PlaylistItem'
import PlaylistMenu from '@/app/components/UI/PlaylistMenu'
import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

const Playlists: FC = () => {
	const { statePlaylistMenu } = useAppSelector(state => state.playlistMenu)
	const { creatingPlaylistArray } = useAppSelector(
		state => state.creatingPlaylist
	)
	const { favoritesAlbums } = useAppSelector(state => state.favouriteAlbums)
	const { closePlaylistMenu } = useActions()
	const router = useRouter()

	useEffect(() => {
		router.events.on('routeChangeStart', closePlaylistMenu)

		return () => {
			router.events.off('routeChangeStart', closePlaylistMenu)
		}
	}, [router])

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
				{favoritesAlbums.map(al => (
					<AlbumItem key={al._id} album={al} />
				))}
				{creatingPlaylistArray.map((playlist, index) => (
					<PlaylistItem key={playlist._id} playlist={playlist} />
				))}
				<CreatePlaylist />
			</ul>
		</div>
	)
}

export default Playlists
