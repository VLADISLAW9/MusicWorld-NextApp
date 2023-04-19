import AlbumItem from '@/app/components/UI/AlbumItem'
import ChartItem from '@/app/components/UI/ChartItem'
import HomeListHeader from '@/app/components/UI/HomeListHeader'
import PlaylistMenu from '@/app/components/UI/PlaylistMenu'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IAuthorProps } from '@/pages/author/[id]'
import { FC } from 'react'

const MainBlock: FC<IAuthorProps> = ({ author }) => {

	const { statePlaylistMenu } = useAppSelector(state => state.playlistMenu)

	return (
		<div>
			{statePlaylistMenu && <PlaylistMenu />}
			<div>
				<HomeListHeader link={'Chart'} header={'Popular tracks'} />
				<ul className='mt-5'>
					{author.tracks.map((m, index: number) => (
						<ChartItem key={m._id} track={m} hideCrown={true} index={index} />
					))}
				</ul>
			</div>
			<div className='mt-16'>
				<HomeListHeader link={'Chart'} header={'Popular albums'} />
				<ul className='mt-5 grid grid-cols-6 gap-8'>
					{author.playlist?.map(a => (
						<AlbumItem key={author._id} author={author} album={a} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default MainBlock
