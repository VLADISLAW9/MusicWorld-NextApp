import { FC, PropsWithChildren } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'
import styles from './Layout.module.scss'

type Props = {}

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={styles.layout}>
			<Header />
			<section className='content'>{children}</section>
			<Footer />
		</div>
	)
}

export default Layout
