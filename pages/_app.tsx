import { music } from '@/app/assets/data/music'
import Player from '@/app/components/UI/player/Player'
import { getAllMusic } from '@/app/services'
import { store } from '@/app/store/store'
import type { AppProps } from 'next/app'
import { Router } from 'next/router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { Provider } from 'react-redux'
import '../app/assets/styles/globals.scss'

Router.events.on('routeChangeStart', () => {
	NProgress.start()
})

Router.events.on('routeChangeComplete', () => {
	NProgress.done()
})

Router.events.on('routeChangeError', () => {
	NProgress.done()
})

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
			<Player music={music} />
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
