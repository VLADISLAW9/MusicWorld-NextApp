import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import cn from 'clsx'
import { FC } from 'react'

const CollectionMenu: FC = () => {
	const { activeCollection } = useAppSelector(state => state.handleCollection)

	const { handleCollection } = useActions()

	return (
		<div className='relative z-20 mt-7 mb-10 border-b border-white/5 pb-2'>
			<ul className='z-20 flex gap-10'>
				<li>
					<button
						onClick={() => {
							handleCollection('Tracks')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeCollection === 'Tracks'
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
							handleCollection('Playlists')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeCollection === 'Playlists'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Playlists
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleCollection('Story')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeCollection === 'Story'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Story
					</button>
				</li>
				<li>
					<button
						onClick={() => {
							handleCollection('Podcasts')
						}}
						className={cn(
							'z-20 font-semibold relative hover:text-[#FFCC00] transition-colors',
							activeCollection === 'Podcasts'
								? 'text-white blockActive'
								: 'text-white/50'
						)}
					>
						Podcasts and books
					</button>
				</li>
			</ul>
		</div>
	)
}

export default CollectionMenu
