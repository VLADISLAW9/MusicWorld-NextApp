import { useActions } from '@/app/hooks/actions.hook'
import cn from 'clsx'
import { FC, useState } from 'react'
import { BsChevronRight } from 'react-icons/bs'

interface IHomeListHeader {
	header: string
	title?: string
	link: string
	pageName: string
}

const HomeListHeader: FC<IHomeListHeader> = ({
	header,
	title,
	link,
	pageName
}) => {
	const [hover, setHover] = useState(false)
	const { handleBlock, handleAuthorPageBlock } = useActions()

	const handleClick = () => {
		// if (pageName === 'AuthorsPage') {
		// 	handleAuthorPageBlock(link)
		// 	window.scrollTo(0, 0)
		// } else {
		// 	handleBlock(link)
		// 	window.scrollTo(0, 0)
		// }
		switch (pageName) {
			case 'AuthorsPage':
				handleAuthorPageBlock(link)
				window.scrollTo(0, 0)
				break
			case 'HomePage':
				handleBlock(link)
				window.scrollTo(0, 0)
				break
		}
	}
	return (
		<div
			onClick={handleClick}
			onMouseEnter={() => {
				setHover(true)
			}}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='z-20 relative hover:cursor-pointer flex justify-between items-end'
		>
			<div>
				<h1
					className={cn(
						'transition-colors text-2xl mb-2 font-semibold',
						hover ? 'text-[#FFCC00]' : 'text-white'
					)}
				>
					{header}
				</h1>
				<p className='text-white/40 font-light'>{title}</p>
			</div>

			<div
				className={cn(
					'flex transition-colors',
					hover ? 'text-[#FFCC00]' : 'text-white'
				)}
			>
				See all
				<BsChevronRight
					className={cn(
						'translate-y-1 ml-1 transition-transform',
						hover ? 'translate-x-1 ' : ''
					)}
				/>
			</div>
		</div>
	)
}

export default HomeListHeader
