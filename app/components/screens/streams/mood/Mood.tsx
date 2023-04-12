import { FC } from 'react'
import { mood_items } from './Mood.data'
import MoodItem from './review-item/MoodItem'

const Mood: FC = () => {
	return (
		<div>
			<ul className='grid-cols-5 gap-x-1 gap-y-4 grid'>
				{mood_items.map(data => (
					<MoodItem key={data._id} data={data} />
				))}
			</ul>
		</div>
	)
}

export default Mood
