import HomeListHeader from '@/app/components/UI/HomeListHeader'
import { IMusicProps } from '@/pages'
import { FC } from 'react'
import ChartItem from '../../../../../UI/ChartItem'

const AllChart: FC<IMusicProps> = ({ music }) => {
	const musicChart = music?.sort((a, b) => b.rating - a.rating)

	const data = musicChart?.slice(0, 10)

	return (
		<div className='relative mt-28'>
			<HomeListHeader
				pageName={'HomePage'}
				link={'Chart'}
				header={'Chart'}
				title={'Tracks popular on Music World right now'}
			/>
			<ul className='mt-8 grid grid-rows-5 grid-flow-col gap-y-2 gap-x-10  '>
				{data?.map((track, index) => (
					<ChartItem index={index} key={track._id} track={track} />
				))}
			</ul>
		</div>
	)
}

export default AllChart
