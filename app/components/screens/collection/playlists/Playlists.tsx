import FavouritePlaylist from '@/app/components/UI/FavouritePlaylist'
import { FC } from 'react'

const Playlists: FC = () => {
	return (
		<div>
			<h1 className='text-white text-xl font-semibold'>Playlist</h1>
			<ul className='grid grid-cols-6 mt-5 gap-8'>
				<FavouritePlaylist />
			</ul>
		</div>
	)
}

export default Playlists
