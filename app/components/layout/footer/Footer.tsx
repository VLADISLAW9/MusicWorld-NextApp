import { FC } from 'react'
import styles from './Footer.module.scss'
import FooterLogo from './logo/FooterLogo'
import FooterTitle from './title/FooterTitle'

const Footer: FC = () => {
	return (
		<footer className={styles.footer}>
			<FooterLogo/>
			<FooterTitle/>
		</footer>
	)
}

export default Footer
