import Home from '@/app/components/screens/home/Home'
import { getAllMusic } from '@/app/services/music'
import { IMusic } from '@/app/types/IMusic'
import { NextPage } from 'next'

export interface IMusicProps {
	music: IMusic[]
}

const HomePage: NextPage<IMusicProps> = ({ music }) => {
	return <Home music={music} />
}

export async function getStaticProps() {
	const music = await getAllMusic()

	return {
		props: {
			music
		}
	}
}

export default HomePage
