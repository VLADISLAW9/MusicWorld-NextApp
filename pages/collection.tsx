import Collection from '@/app/components/screens/collection/Collection'
import { getAllMusic } from '@/app/services'
import { IMusic } from '@/app/types/IMusic'
import { NextPage } from 'next'

export interface IMusicProps {
	music: IMusic[]
}

const CollectionPage: NextPage<IMusicProps> = ({ music }) => {
	return <Collection music={music} />
}

export async function getStaticProps() {
	const music = await getAllMusic()

	return {
		props: {
			music
		}
	}
}

export default CollectionPage
