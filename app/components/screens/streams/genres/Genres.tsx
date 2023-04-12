import { FC } from 'react'
import GenresItem from './genres-item/GenresItem'
import { genres_items } from './Genres.data'

const Genres: FC = () => {
	return (
		<div>
			<ul className='grid-cols-5 gap-x-1 gap-y-4 grid '>
				{genres_items.map(data => (
					<GenresItem key={data._id} data={data} />
				))}
			</ul>
		</div>
	)
}

export default Genres
