import { IMusic } from '@/app/types/IMusic'
import { FC } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.scss'

interface ILayoutProps {
	children: any
	music: IMusic[]
}

const Layout: FC<ILayoutProps> = ({ children, music }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<main className='content'>{children}</main>

			<Footer />
		</div>
	)
}

export default Layout
