import AlbumItem from '@/app/components/UI/AlbumItem'
import PlaylistMenu from '@/app/components/UI/PlaylistMenu'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IAuthorProps } from '@/pages/author/[id]'
import { FC } from 'react'

const AlbumsBlock: FC<IAuthorProps> = ({ author }) => {
	const { statePlaylistMenu } = useAppSelector(state => state.playlistMenu)

	return (
		<div>
			{statePlaylistMenu && <PlaylistMenu />}
			<h1 className='text-white text-2xl font-semibold'>Albums</h1>
			<ul className='mt-5 grid grid-cols-6 gap-8'>
				{author.playlist?.map(a => (
					<AlbumItem key={author._id} album={a} />
				))}
			</ul>
		</div>
	)
}

export default AlbumsBlock
