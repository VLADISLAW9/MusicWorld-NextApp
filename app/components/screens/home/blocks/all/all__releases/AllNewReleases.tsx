import HomeListHeader from '@/app/components/UI/HomeListHeader'
import MusicItem from '@/app/components/UI/MusicItem'
import { IMusicProps } from '@/pages'
import { FC } from 'react'

const AllNewReleases: FC<IMusicProps> = ({newRelease}) => {
	return (
		<div className='relative'>
			<HomeListHeader
				header={'New releases'}
				title={'New tracks, albums and compilations'}
			/>
			<ul className='flex mt-8 gap-8'>
				{newRelease?.map(mus => (
					<MusicItem key={mus._id} mus={mus} />
				))}
			</ul>
		</div>
	)
}

export default AllNewReleases
