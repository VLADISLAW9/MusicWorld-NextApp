import AuthorItem from '@/app/components/UI/AuthorItem'
import HomeListHeader from '@/app/components/UI/HomeListHeader'
import { IMusicProps } from '@/pages'
import { FC } from 'react'

const AllAuthors: FC<IMusicProps> = ({ authors }) => {
	return (
		<div className='relative mt-28'>
			<HomeListHeader
				link={'Authors'}
				header={'Authors'}
				title={'All famous authors of various hits'}
			/>
			<ul className='flex mt-8 gap-8'>
				{authors?.slice(0, 6).map(author => (
					<AuthorItem author={author} key={author._id} />
				))}
			</ul>
		</div>
	)
}

export default AllAuthors
