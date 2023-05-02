import CollectionTrackItem from '@/app/components/UI/CollectionTrackItem'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'

const Tracks: FC = () => {
	const { favorites } = useAppSelector(state => state.favoritesSlice)

	return (
		<div>
			<h1
				className='text-white text-xl 
			font-semibold'
			>
				Tracks
			</h1>
			{favorites.length === 0 ? (
				<h1 className='text-white/50 text-2xl text-center mt-10'>
					There is no music in your collection
				</h1>
			) : (
				<ul className='mt-5'>
					<li className='flex ml-[10px] mb-5'>
						<div className='text-white/50 d-track__start-column'>#</div>
						<div className='text-white/50 d-track__name'>Name</div>
						<div className='text-white/50 d-track__artist mr-[5px]'>Author</div>
					</li>
					{favorites.map((mus, index) => (
						<CollectionTrackItem index={index} mus={mus} key={mus._id} />
					))}
				</ul>
			)}
		</div>
	)
}

export default Tracks
