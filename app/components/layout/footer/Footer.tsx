import { FC } from 'react'
import styles from './Footer.module.scss'
import FooterLogo from './logo/FooterLogo'
import FooterTitle from './title/FooterTitle'

const Footer: FC = () => {
	return (
		<div className={styles.footer}>
			<FooterLogo/>
			<FooterTitle/>
		</div>
	)
}

export default Footer
