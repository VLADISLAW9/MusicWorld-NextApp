import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import cn from 'clsx'
import { FC } from 'react'

const HomeMenu: FC = () => {
	const { activeStream } = useAppSelector(state => state.handleStreams)

	const { handleStreams } = useActions()

	return (
		<div className='relative z-20 mt-7 mb-10 border-b border-white/5 pb-2'>
			<ul className='z-20 flex gap-20'>
				<li>
					<button
						onClick={() => {
							handleStreams('Review')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeStream === 'Review'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Review
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleStreams('Genres')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeStream === 'Genres'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Genres
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleStreams('Mood')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeStream === 'Mood'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Mood
					</button>
				</li>
			</ul>
		</div>
	)
}

export default HomeMenu
