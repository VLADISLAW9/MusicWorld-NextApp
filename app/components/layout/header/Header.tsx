import styles from './Header.module.scss'
import HeaderLogo from './logo/HeaderLogo'
import HeaderMenu from './menu/HeaderMenu'
import HeaderProfile from './profile/HeaderProfile'
import HeaderSearch from './search/HeaderSearch'

const Header = () => {
	return (
		<header className={styles.header}>
			<HeaderLogo />
			<HeaderMenu />
			{/* <HeaderSearch /> */}
			<HeaderProfile />
		</header>
	)
}

export default Header
