import Collection from '@/app/components/screens/collection/Collection'
import { getAllMusic } from '@/app/services'
import { IMusic } from '@/app/types/IMusic'
import { NextPage } from 'next'

interface ICollectionProps {
	music: IMusic[]
}

const CollectionPage: NextPage<ICollectionProps> = ({ music }) => {
	return <Collection />
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
