import AuthorItem from '@/app/components/UI/AuthorItem'
import GenreSelector from '@/app/components/UI/GenreSelector'
import { IAuthor } from '@/app/types/IAuthor'
import { IMusicProps } from '@/pages'
import { FC } from 'react'


const Authors: FC<IMusicProps> = ({ authors }) => {
	function AuthorsGenre(genre: string) {
		return authors?.filter(a => a.genre.includes(genre))
	}

	const rap = AuthorsGenre('rap')
	const pop = AuthorsGenre('pop')
	const metal = AuthorsGenre('metal')
	const rock = AuthorsGenre('rock')
	const house = AuthorsGenre('house')
	const edm = AuthorsGenre('edm')

	return (
		<div className='mt-10'>
			<h1 className='text-white text-xl font-semibold'>
				All famous authors of various hits
			</h1>
			{/* <GenreSelector/> */}
			<ul className='mt-8 grid grid-cols-6 gap-8'>
				<div className='rounded-full bg-white/5 w-[200[px] h-[200px] flex justify-center text-2xl text-white/50 items-center'>
					Rap
				</div>
				{rap?.map((author: IAuthor) => (
					<AuthorItem key={author._id} author={author} />
				))}
				<div className=' rounded-full bg-white/5 w-[200[px] h-[200px] flex justify-center text-2xl text-white/50 items-center'>
					Pop
				</div>
				{pop?.map((author: IAuthor) => (
					<AuthorItem key={author._id} author={author} />
				))}
				<div className='rounded-full bg-white/5 w-[200[px] h-[200px] flex justify-center text-2xl text-white/50 items-center'>
					Metal
				</div>
				{metal?.map((author: IAuthor) => (
					<AuthorItem key={author._id} author={author} />
				))}
				<div className='w-[200[px] h-[200px] rounded-full bg-white/5 flex justify-center text-2xl text-white/50 items-center'>
					Rock
				</div>
				{rock?.map((author: IAuthor) => (
					<AuthorItem key={author._id} author={author} />
				))}
				<div className='w-[200[px] h-[200px] rounded-full bg-white/5 flex justify-center text-2xl text-white/50 items-center'>
					House
				</div>
				{house?.map((author: IAuthor) => (
					<AuthorItem key={author._id} author={author} />
				))}
				<div className='w-[200[px] h-[200px] rounded-full bg-white/5 flex justify-center text-2xl text-white/50 items-center'>
					EDM
				</div>
				{edm?.map((author: IAuthor) => (
					<AuthorItem key={author._id} author={author} />
				))}
			</ul>
		</div>
	)
}

export default Authors
