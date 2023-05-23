import { authors } from '@/app/assets/data/authors'
import { music } from '@/app/assets/data/music'
import Player from '@/app/components/UI/player/Player'
import { getAllMusic } from '@/app/services'
import { store } from '@/app/store/store'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'
import '../app/assets/styles/globals.scss'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<Player authors={authors} music={music} />
		</Provider>
	)
}

export async function getStaticProps() {
	const music = await getAllMusic()

	return {
		props: {
			music
		}
	}
}
