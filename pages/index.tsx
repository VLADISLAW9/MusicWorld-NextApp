import Home from '@/app/components/screens/home/Home'
import { getAllMusic } from '@/app/services/music'
import { IMusic } from '@/app/types/IMusic'
import { FC } from 'react'

export interface IMusicProps {
	music: IMusic[]
	
}

const HomePage: FC<IMusicProps> = ({ music }) => {
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

// Получаем всю музыку из api

// export const getStaticPaths = async () => {
// 	const response = await fetch('http://localhost:3000/api/music')
// 	const music = await response.json()

// 	const paths = music.map((i: IMusic) => ({ params: { id: i._id } }))

// 	return { paths, fallback: 'blocking' }
// }

// export const getStaticProps = async ({ params }) => {
// 	const response = await fetch(`http://localhost:3000/api/music/${params.id}`)
// 	const music = await response.json()

// 	return {
// 		props: {
// 			music
// 		},
// 		revalidate: 10
// 	}
// }

export default HomePage
