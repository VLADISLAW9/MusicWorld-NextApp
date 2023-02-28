import { FC } from 'react'

const Listened: FC = () => {
	return (
		<div className='mt-28'>
			<h1 className='transition-colors text-2xl mb-2 font-semibold text-white'>
				Have you recently listened to
			</h1>
			<h1 className='text-white/50 text-xl opacity-70 flex justify-center mt-14 mb-32'>
				You didn't listen to anything
			</h1>
		</div>
	)
}

export default Listened
