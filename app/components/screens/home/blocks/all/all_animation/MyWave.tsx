import { FC, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import Background from './Background'

const MyWave: FC = () => {
	const [state, setState] = useState(false)

	return (
		<div className='relative'>
			<Background />
			<div className='flex justify-center'>
				{!state ? (
					<button
						onClick={() => {
							setState(true)
						}}
						className=' mt-28 flex items-center hover:scale-125 transition-all z-20'
					>
						<BiPlay className='w-12 h-12 text-white' />
						<div className='text-3xl text-white font-bold'>My wave</div>
					</button>
				) : (
					<button
						onClick={() => {
							setState(false)
						}}
						className=' mt-28 flex items-center hover:scale-125 transition-all z-20'
					>
						<BiPause className='w-12 h-12 text-white' />
						<div className='text-3xl text-white font-bold'>My wave</div>
					</button>
				)}
			</div>
		</div>
	)
}

export default MyWave
