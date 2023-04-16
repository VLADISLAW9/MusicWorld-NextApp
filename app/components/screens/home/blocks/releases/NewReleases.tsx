import MusicItem from '@/app/components/UI/MusicItem'
import { IMusic } from '@/app/types/IMusic'
import { IMusicProps } from '@/pages'
import { FC } from 'react'

const AllNewReleases: FC<IMusicProps> = ({ music }) => {
	const musicNewRelease = music?.filter((i: IMusic) => i.release === 2023)

	return (
		<div className='mt-10'>
			<h1 className='text-white text-xl font-semibold'>
				New tracks, albums and compilations
			</h1>
			<ul className='grid grid-cols-6 mt-8 gap-8'>
				{musicNewRelease?.map((mus) => (
					<MusicItem key={mus._id} mus={mus} />
				))}
			</ul>
		</div>
	)
}

export default AllNewReleases
