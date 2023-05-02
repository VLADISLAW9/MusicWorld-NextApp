import ChartItem from '@/app/components/UI/ChartItem'
import { IAuthorProps } from '@/pages/author/[id]'
import { FC } from 'react'

const TracksBlock: FC<IAuthorProps> = ({ author }) => {
	return (
		<div>
			<h1 className='text-2xl text-white font-semibold '>Tracks</h1>
			<ul className='mt-7'>
				{author.tracks.map((m, index: number) => (
					<ChartItem key={m._id} track={m} hideCrown={true} index={index} />
				))}
			</ul>
		</div>
	)
}

export default TracksBlock
