import AuthorItem from '@/app/components/UI/AuthorItem'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'

const AuthorsCollection: FC = () => {
	const { favoritesAuthors } = useAppSelector(state => state.favoritesAuthor)

	return (
		<div>
			<h1
				className='text-white text-xl 
font-semibold'
			>
				Authors
			</h1>
			{favoritesAuthors.length === 0 ? (
				<h1 className='text-2xl text-white/50 mt-10 text-center'>There is no authors in your collection</h1>
			) : (
				<ul className='mt-5 grid grid-cols-6 gap-8'>
					{favoritesAuthors.map(author => (
						<AuthorItem key={author._id} author={author} />
					))}
				</ul>
			)}
		</div>
	)
}

export default AuthorsCollection
