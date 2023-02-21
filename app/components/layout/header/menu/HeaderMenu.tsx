import HeaderSearch from '../search/HeaderSearch'
import styles from './HeaderMenu.module.scss'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'

const HeaderMenu = () => {
	return (
		<div className={styles.menu}>
			<nav>
				<ul>
					{menu.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
					<HeaderSearch/>
				</ul>
			</nav>
		</div>
	)
}

export default HeaderMenu
