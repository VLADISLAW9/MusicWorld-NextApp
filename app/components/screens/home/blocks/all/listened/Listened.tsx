import MusicItem from '@/app/components/UI/MusicItem'
import { IMusicProps } from '@/pages'
import { FC } from 'react'

const Listened: FC<IMusicProps> = ({ newRelease }) => {
	return (
		<div className='mt-28'>
			<h1 className='transition-colors text-2xl mb-2 font-semibold text-white'>
				Have you recently listened to
			</h1>
			<ul className='flex mt-8 gap-8'>
				{newRelease?.map(mus => (
					<MusicItem key={mus._id} mus={mus} />
				))}
			</ul>
		</div>
	)
}

export default Listened
