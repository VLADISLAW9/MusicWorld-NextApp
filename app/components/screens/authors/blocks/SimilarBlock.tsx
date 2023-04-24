import { authors } from '@/app/assets/data/authors'
import AuthorItem from '@/app/components/UI/AuthorItem'
import { IAuthor } from '@/app/types/IAuthor'
import { IAuthorProps } from '@/pages/author/[id]'
import { FC } from 'react'

const SimilarBlock: FC<IAuthorProps> = ({ author }) => {
	function getSimilarAuthors() {
		let similarAuthors: IAuthor[] = []
		for (let i = 0; i < authors.length; i++) {
			for (let j = 0; j < authors[i].genre.length; j++) {
				if (
					author.genre.includes(authors[i].genre[j]) &&
					!similarAuthors.includes(authors[i])
				) {
					similarAuthors.push(authors[i])
				}
			}
		}
		return similarAuthors.filter(a => a._id !== author._id)
	}

	const similarAuthors = getSimilarAuthors()

	return (
		<div>
			<h1 className='text-white text-2xl font-semibold'>Similar</h1>
			<ul className='mt-5 grid grid-cols-6 gap-8'>
				{similarAuthors?.map((a: IAuthor) => (
					<AuthorItem key={author._id} author={a} />
				))}
			</ul>
		</div>
	)
}

export default SimilarBlock
