import cn from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import { IMenuLink } from './menu-item.interface'

interface IMenuItem {
	item: IMenuLink
}

const MenuItem: FC<IMenuItem> = ({ item }) => {
	const router = useRouter()

	// определяем, является ли текущий путь (asPath) активным
	const isActive = (href: any) => {
		return router.asPath === href
	}

	return (
		<li>
			<Link
				href={item.link}
				className={cn(
					'text-[15px] relative hover:text-[#FFCC00] transition-all duration-100',
					isActive(item.link) ? 'linkActive' : 'text-white/50'
				)}
			>
				{item.name}
			</Link>
		</li>
	)
}

export default MenuItem
