import Home from '@/app/components/screens/home/Home'
import { getAllAuthors, getAllMusic } from '@/app/services'
import { IAuthor } from '@/app/types/IAuthor'
import { IMusic } from '@/app/types/IMusic'
import { NextPage } from 'next'

export interface IMusicProps {
	music: IMusic[]
	authors: IAuthor[]
}

const HomePage: NextPage<IMusicProps> = ({ music, authors }) => {
	return <Home authors={authors} music={music} />
}

export async function getStaticProps() {
	const music = await getAllMusic()
	const authors = await getAllAuthors()

	return {
		props: {
			music,
			authors
		}
	}
}

export default HomePage
