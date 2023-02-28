import HomeListHeader from '@/app/components/UI/HomeListHeader'
import { fetchMusicById } from '@/app/services/music'
import { FC } from 'react'

const AllChart: FC = () => {
	return (
		<div className='relative'>
			<HomeListHeader
				header={'Chart'}
				title={'Tracks popular on Music World right now'}
			/>
		</div>
	)
}

export default AllChart
