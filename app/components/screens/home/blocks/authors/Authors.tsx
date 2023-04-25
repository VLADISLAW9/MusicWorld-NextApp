import AuthorItem from '@/app/components/UI/AuthorItem'
import { IAuthor } from '@/app/types/IAuthor'
import { IMusicProps } from '@/pages'
import { FC } from 'react'

const Authors: FC<IMusicProps> = ({ authors }) => {
	return (
		<div className='mt-10'>
			<h1 className='text-white text-xl font-semibold'>
				All famous authors of various hits
			</h1>
			<ul className='mt-8 grid grid-cols-6 gap-8'>
				{authors?.map((author: IAuthor) => (
					<AuthorItem key={author._id} author={author} />
				))}
			</ul>
		</div>
	)
}

export default Authors
