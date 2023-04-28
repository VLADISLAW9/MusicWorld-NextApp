import { albums } from '@/app/assets/data/albums'
import AlbumItem from '@/app/components/UI/AlbumItem'
import MusicItem from '@/app/components/UI/MusicItem'
import { IMusicProps } from '@/pages'
import { FC } from 'react'

const AllNewReleases: FC<IMusicProps> = ({ music, authors }) => {
	const musicNewRelease = music?.filter(i => i.release === 2023)
	const albumsNewRelease = albums.filter(a => a.release === 2023)

	return (
		<div className='mt-10'>
			<h1 className='text-white text-xl font-semibold'>
				New tracks, albums and compilations
			</h1>
			<ul className='grid grid-cols-6 mt-8 gap-8'>
				<li className='w-[200px] h-[200px] flex justify-center items-center'>
					<h1
						className='text-white/60
						text-2xl
					'
					>
						Tracks
					</h1>
				</li>
				{musicNewRelease?.map(mus => (
					<MusicItem authors={authors} key={mus._id} mus={mus} />
				))}
				<li className='w-[200px]  h-[200px] flex justify-center items-center'>
					<h1
						className='text-white/60
						text-2xl
					'
					>
						Albums
					</h1>
				</li>
				{albumsNewRelease?.map(alb => (
					<AlbumItem key={alb._id} album={alb} />
				))}
			</ul>
		</div>
	)
}

export default AllNewReleases
