import { FC } from 'react'
import ReviewItem from './review-item/ReviewItem'
import { review_items } from './Review.data'

const Review: FC = () => {
	return (
		<div>
			<ul className='flex gap-[3.5rem]'>
				{review_items.map(pl => (
					<ReviewItem key={pl._id} data={pl}/>
				))}
			</ul>
		</div>
	)
}

export default Review
