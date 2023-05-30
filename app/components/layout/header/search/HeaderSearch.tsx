import { albums } from '@/app/assets/data/albums'
import { authors } from '@/app/assets/data/authors'
import { music } from '@/app/assets/data/music'
import AlbumItem from '@/app/components/UI/AlbumItem'
import AuthorItem from '@/app/components/UI/AuthorItem'
import ChartItem from '@/app/components/UI/ChartItem'
import { useOutside } from '@/app/hooks/outside.hook'
import { FC, useState } from 'react'
import { FiSearch } from 'react-icons/fi'

const HeaderSearch: FC = () => {
	const { isShow, setIsShow, ref } = useOutside(false)
	const [searchQuery, setSearchQuery] = useState('')

	const filteredAuthors = searchQuery
		? authors.filter(author =>
				author.name.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: []
	const filteredMusic = searchQuery
		? music.filter(
				track =>
					track.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					track.author.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: []

	const filteredAlbums = searchQuery
		? albums.filter(
				album =>
					album.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
					album.author.toLowerCase().includes(searchQuery.toLowerCase())
		  )
		: []

	return (
		<div className='relative'>
			<button
				onClick={() => {
					setIsShow(!isShow)
				}}
			>
				<FiSearch className='translate-y-1 w-5 h-5 text-white/50 hover:text-white transition-colors' />
			</button>
			{isShow && (
				<div className='absolute top-0 left-6'>
					<input
						value={searchQuery}
						onChange={e => setSearchQuery(e.target.value)}
						type='text'
						autoFocus
						ref={ref}
						placeholder='Track, album, author'
						className='placeholder:text-[14px] placeholder:text-white/50  outline-none border-b border-white/50 text-[14px] text-white relative left-2 bg-[#181818]'
					/>
				</div>
			)}
			{isShow &&
				searchQuery &&
				(filteredAlbums.length || filteredAuthors.length || filteredMusic) >
					0 && (
					<div className='bg-[#181818] h-[700px] overflow-auto absolute top-[23px] p-4 left-8 border border-[#8C8C8C] '>
						<div className='mb-5'>
							<h1 className='text-white/50 mb-3'>Authors</h1>
							{filteredAuthors.map(author => (
								<div key={author._id} className='mb-3'>
									<AuthorItem mini={true} author={author} />
								</div>
							))}
						</div>
						<div className='mb-5'>
							<h1 className='text-white/50'>Music</h1>
							{filteredMusic.map((track, index) => (
								<ChartItem
									hideCrown={true}
									index={index}
									key={track._id}
									track={track}
								/>
							))}
						</div>
						<div>
							<h1 className='text-white/50 mb-3'>Albums</h1>
							{filteredAlbums.map(album => (
								<div key={album._id}>
									<AlbumItem mini={true} album={album} />
								</div>
							))}{' '}
							{filteredAlbums.length === 0 && (
								<h1 className='text-[#525252]'>Not a albums</h1>
							)}
						</div>
					</div>
				)}
		</div>
	)
}

export default HeaderSearch
