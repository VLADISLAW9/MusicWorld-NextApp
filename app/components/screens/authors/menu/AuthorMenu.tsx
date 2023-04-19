import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import cn from 'clsx'
import { FC } from 'react'

const AuthorMenu: FC = () => {
	const { handleAuthorPageBlock } = useActions()

	const { activeAuthorPageBlock } = useAppSelector(
		state => state.handleAuthorPageBlock
	)

	return (
		<div className='relative z-20 mt-7 mb-10 border-b border-white/5 pb-2'>
			<ul className='z-20 flex gap-10'>
				<li>
					<button
						onClick={() => {
							handleAuthorPageBlock('Main')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeAuthorPageBlock === 'Main'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Main
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleAuthorPageBlock('Tracks')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeAuthorPageBlock === 'Tracks'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Tracks
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleAuthorPageBlock('Albums')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeAuthorPageBlock === 'Albums'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Albums
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleAuthorPageBlock('Similar')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeAuthorPageBlock === 'Similar'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Similar
					</button>
				</li>
			</ul>
		</div>
	)
}

export default AuthorMenu
