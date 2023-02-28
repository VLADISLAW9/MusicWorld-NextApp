import ChartItem from '@/app/components/UI/ChartItem'
import { IMusicProps } from '@/pages'
import { FC } from 'react'

const AllChart: FC<IMusicProps> = ({ music }) => {
	const musicChart = music?.sort((a, b) => b.rating - a.rating)

	return (
		<div className='relative mt-10'>
			<h1 className='text-white text-xl font-semibold'>
				Tracks popular on Music World right now
			</h1>
			<ul className='mt-8 grid grid-rows-5 grid-flow-row gap-y-2 gap-x-10  '>
				{musicChart?.map((track, index) => (
					<ChartItem index={index} key={track._id} track={track} />
				))}
			</ul>
		</div>
	)
}

export default AllChart
