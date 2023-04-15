import AuthorsPage from '@/app/components/screens/authors/AuthorsPage'
import { getAllAuthors, getCurrentAuthor } from '@/app/services'
import { IAuthor } from '@/app/types/IAuthor'
import { GetStaticPaths, GetStaticPropsContext } from 'next'
import { FC } from 'react'

export interface IAuthorProps {
	author: IAuthor
}

const Author: FC<IAuthorProps> = ({ author }) => {
	return <AuthorsPage author={author} />
}

export const getStaticPaths: GetStaticPaths = async () => {
	const authors = await getAllAuthors()

	const paths = authors.map((a: IAuthor) => ({
		params: { id: a._id.toString() }
	}))

	return { paths, fallback: 'blocking' }
}

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	const id = params?.id

	if (!id) {
		return {
			notFound: true
		}
	}

	const author = await getCurrentAuthor(id)

	return {
		props: {
			author
		},
		revalidate: 10
	}
}

export default Author
