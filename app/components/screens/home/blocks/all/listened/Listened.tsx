import MusicItem from '@/app/components/UI/MusicItem'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { FC } from 'react'
import Slider from 'react-slick'

const Listened: FC = () => {
	const { listened } = useAppSelector(state => state.listened)

	const settings = {
		// dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 6,
		slidesToScroll: 1
	}

	return (
		<div className='mt-28 mb-20'>
			<h1 className='transition-colors text-2xl mb-2 font-semibold text-white'>
				Have you recently listened to
			</h1>
			<div className='mt-7'>
				{listened.length > 0 ? (
					<>
						{listened.length >= 6 ? (
							<Slider className='' {...settings}>
								{listened.map(music => (
									<MusicItem key={music._id} mus={music} />
								))}
							</Slider>
						) : (
							<ul className='flex gap-[2rem]'>
								{listened.map(music => (
									<MusicItem key={music._id} mus={music} />
								))}
							</ul>
						)}
					</>
				) : (
					<h1 className='text-white/50 text-xl opacity-70 flex justify-center mt-14 mb-32'>
						You didn't listen anything
					</h1>
				)}
			</div>
		</div>
	)
}

export default Listened
