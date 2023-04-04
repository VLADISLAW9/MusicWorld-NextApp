import MusicItem from '@/app/components/UI/MusicItem'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'
import { useSnapCarousel } from 'react-snap-carousel'

const Listened: FC = () => {
	const { listened } = useAppSelector(state => state.listened)
	const { scrollRef, pages, activePageIndex, next, prev, goTo } =
		useSnapCarousel()
	return (
		<div className='mt-28'>
			<h1 className='transition-colors text-2xl mb-2 font-semibold text-white'>
				Have you recently listened to
			</h1>
			{listened.length > 0 ? (
				<>
					<ul
						ref={scrollRef}
						style={{
							display: 'flex',
							overflow: 'auto',
							gap: '2rem',
							scrollSnapType: 'x mandatory'
						}}
					>
						{listened.map(music => (
							<MusicItem key={music._id} mus={music} />
						))}
					</ul>
					<div>
						{activePageIndex + 1} / {pages.length}
					</div>
					<button onClick={() => prev()}>Prev</button>
					<button onClick={() => next()}>Next</button>
					<ol style={{ display: 'flex' }}>
						{pages.map((_, i) => (
							<li key={i}>
								<button
									style={i === activePageIndex ? { opacity: 0.5 } : {}}
									onClick={() => goTo(i)}
								>
									{i + 1}
								</button>
							</li>
						))}
					</ol>
				</>
			) : (
				<h1 className='text-white/50 text-xl opacity-70 flex justify-center mt-14 mb-32'>
					You didn't listen anything
				</h1>
			)}
		</div>
	)
}

export default Listened
