import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusicProps } from '@/pages'
import { FC } from 'react'
import Layout from '../../layout/Layout'
import Genres from './genres/Genres'
import StreamsMenu from './menu/StreamsMenu'
import Mood from './mood/Mood'
import Review from './review/Review'

const Streams: FC<IMusicProps> = () => {
	const { activeStream } = useAppSelector(state => state.handleStreams)

	return (
		<Layout>
			<div className='px-[30px] py-[20px] mt-12'>
				<h1 className='text-5xl text-white font-bold'>Streams</h1>
				<StreamsMenu />
				{activeStream === 'Review' && <Review />}
				{activeStream === 'Genres' && <Genres />}
				{activeStream === 'Mood' && <Mood />}
			</div>
		</Layout>
	)
}

export default Streams
