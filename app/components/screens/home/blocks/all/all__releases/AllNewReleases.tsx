import HomeListHeader from '@/app/components/UI/HomeListHeader'
import MusicItem from '@/app/components/UI/MusicItem'
import { IMusic } from '@/app/types/IMusic'
import { IMusicProps } from '@/pages'
import { FC } from 'react'

const AllNewReleases: FC<IMusicProps> = ({ music }) => {
	const musicNewRelease = music?.filter((i: IMusic) => i.release === 2023)
	const data = musicNewRelease?.slice(0, 6)
	return (
		<div className='relative mt-28'>
			<HomeListHeader
				link = {'NewReleases'}
				header={'New releases'}
				title={'New tracks, albums and compilations'}
			/>
			<ul className='flex mt-8 gap-8'>
				{data?.map(mus => (
					<MusicItem key={mus._id} mus={mus} />
				))}
			</ul>
		</div>
	)
}

export default AllNewReleases
