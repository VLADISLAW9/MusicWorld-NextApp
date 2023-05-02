import { authors } from '@/app/assets/data/authors'
import AlbumItem from '@/app/components/UI/AlbumItem'
import AuthorItem from '@/app/components/UI/AuthorItem'
import ChartItem from '@/app/components/UI/ChartItem'
import HomeListHeader from '@/app/components/UI/HomeListHeader'
import PlaylistMenu from '@/app/components/UI/PlaylistMenu'
import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IAuthor } from '@/app/types/IAuthor'
import { IAuthorProps } from '@/pages/author/[id]'
import { useRouter } from 'next/router'
import { FC, useEffect } from 'react'

const MainBlock: FC<IAuthorProps> = ({ author }) => {
	const { statePlaylistMenu } = useAppSelector(state => state.playlistMenu)
	const { closePlaylistMenu } = useActions()
	const router = useRouter()
	function getSimilarAuthors() {
		let similarAuthors: IAuthor[] = []
		for (let i = 0; i < authors.length; i++) {
			for (let j = 0; j < authors[i].genre.length; j++) {
				if (
					author.genre.includes(authors[i].genre[j]) &&
					!similarAuthors.includes(authors[i])
				) {
					similarAuthors.push(authors[i])
				}
			}
		}
		return similarAuthors.filter(a => a._id !== author._id)
	}

	const similarAuthors = getSimilarAuthors()

	useEffect(() => {
		router.events.on('routeChangeStart', closePlaylistMenu)

		return () => {
			router.events.off('routeChangeStart', closePlaylistMenu)
		}
	}, [router])

	return (
		<div>
			{statePlaylistMenu && <PlaylistMenu />}
			<div>
				<HomeListHeader
					pageName={'AuthorsPage'}
					link={'Tracks'}
					header={'Popular tracks'}
				/>
				<ul className='mt-5'>
					{author.tracks.slice(0, 4).map((m, index: number) => (
						<ChartItem key={m._id} track={m} hideCrown={true} index={index} />
					))}
				</ul>
			</div>
			<div className='mt-16'>
				<HomeListHeader
					pageName={'AuthorsPage'}
					link={'Albums'}
					header={'Popular albums'}
				/>
				{author.playlist.length === 0 ? (
					<h1 className='text-xl text-center text-white/50 mt-7'>The artist has no albums</h1>
				) : (
					<ul className='mt-5 grid grid-cols-6 gap-8'>
						{author.playlist?.slice(0, 11).map(a => (
							<AlbumItem key={author._id} album={a} />
						))}
					</ul>
				)}
			</div>
			<div className='mt-16'>
				<HomeListHeader
					pageName={'AuthorsPage'}
					link={'Similar'}
					header={'Simelar authors'}
				/>
				<ul className='mt-5 grid grid-cols-6 gap-8'>
					{similarAuthors?.slice(0, 11).map((a: IAuthor) => (
						<AuthorItem key={author._id} author={a} />
					))}
				</ul>
			</div>
		</div>
	)
}

export default MainBlock
