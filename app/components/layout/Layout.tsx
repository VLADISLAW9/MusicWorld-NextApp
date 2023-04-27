import { IMusic } from '@/app/types/IMusic'
import { Router } from 'next/router'
import { FC, useState } from 'react'
import ProgressBar from '../UI/ProgressBar'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.scss'

interface ILayoutProps {
	children: any
	music?: IMusic[]
}

const Layout: FC<ILayoutProps> = ({ children, music }) => {
	const [isLoading, setIsLoading] = useState(false)

	Router.events.on('routeChangeStart', () => {
		setTimeout(() => {
			setIsLoading(true)
		}, 300)
	})

	Router.events.on('routeChangeComplete', () => {
		setIsLoading(false)
	})

	Router.events.on('routeChangeError', () => {
		setTimeout(() => {
			setIsLoading(true)
		}, 300)
	})

	return (
		<div className={styles.layout}>
			<Header />
			{isLoading && <ProgressBar />}
			<main className='content'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
