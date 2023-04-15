import Streams from '@/app/components/screens/streams/Streams'
import { getAllMusic } from '@/app/services'
import { IMusic } from '@/app/types/IMusic'
import { NextPage } from 'next'

export interface IMusicProps {
	music: IMusic[]
}

const StreamsPage: NextPage<IMusicProps> = ({ music }) => {
	return <Streams music={music} />
}

export async function getStaticProps() {
	const music = await getAllMusic()

	return {
		props: {
			music
		}
	}
}

export default StreamsPage
