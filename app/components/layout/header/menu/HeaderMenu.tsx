import React from 'react'
import MenuItem from './menu-item/MenuItem'
import { menu } from './menu.data'
import styles from './HeaderMenu.module.scss'

const HeaderMenu = () => {
	return (
		<div className={styles.menu}>
			<nav>
				<ul>
					{menu.map(item => (
						<MenuItem key={item.link} item={item} />
					))}
				</ul>
			</nav>
		</div>
	)
}

export default HeaderMenu
