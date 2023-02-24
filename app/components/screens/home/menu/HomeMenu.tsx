import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import cn from 'clsx'
import { FC } from 'react'

const HomeMenu: FC = () => {
	const { activeBlock } = useAppSelector(state => state.handleBlock)

	const { handleBlock } = useActions()

	return (
		<div className='relative z-20 mt-7 mb-10 border-b border-white/5 pb-2'>
			<ul className='z-20 flex gap-10'>
				<li>
					<button
						onClick={() => {
							handleBlock('All')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeBlock === 'All' ? 'text-white blockActive' : 'text-white/50'
						)}
					>
						All
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleBlock('NewReleases')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeBlock === 'NewReleases'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						New Releases
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleBlock('Chart')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeBlock === 'Chart'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Chart
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleBlock('Mood')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeBlock === 'Mood	'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Moods and Genres
					</button>
				</li>
			</ul>
		</div>
	)
}

export default HomeMenu
