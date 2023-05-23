import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusic } from '@/app/types/IMusic'
import { FC } from 'react'
import Layout from '../../layout/Layout'
import Genres from './genres/Genres'
import StreamsMenu from './menu/StreamsMenu'
import Mood from './mood/Mood'
import Review from './review/Review'

interface IStreamsProps {
	music: IMusic[]
}

const Streams: FC<IStreamsProps> = () => {
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
