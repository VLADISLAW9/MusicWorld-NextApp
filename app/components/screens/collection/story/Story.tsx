import ChartItem from '@/app/components/UI/ChartItem'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'

const Story: FC = () => {
	const { listened } = useAppSelector(state => state.listened)

	return (
		<div>
			<h1
				className='text-white text-xl 
			font-semibold'
			>
				Story
			</h1>
			<ul>
				{listened.map((mus, index) => (
					<ChartItem key={mus._id} track={mus} index={index} />
				))}
			</ul>
		</div>
	)
}

export default Story
