import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusicProps } from '@/pages'
import { FC, useEffect, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import Background from './Background'

const MyWave: FC<IMusicProps> = ({ music }) => {
	const [state, setState] = useState(false)
	const { playMyWave, pauseMyWave, setActiveMyWave, pauseTrack, playTrack } =
		useActions()
	const { activeMyWave, stateMyWave } = useAppSelector(state => state.player)

	const { addToListened } = useActions()
	const { listened } = useAppSelector(state => state.listened)

	useEffect(() => {
		if (stateMyWave) {
			setState(true)
		} else {
			setState(false)
		}
	}, [stateMyWave])

	const play = (e: any) => {
		e.stopPropagation()
		if (activeMyWave) {
			playMyWave()
			setState(true)
		} else {
			if (music) {
				let number = Math.floor(Math.random() * music.length)
				setActiveMyWave(music[number])
			}

			playMyWave()
			setState(true)
		}
	}

	const stop = (e: any) => {
		e.stopPropagation()
		pauseMyWave()
		setState(false)
	}

	return (
		<div className='relative'>
			<Background />
			<div className='flex justify-center'>
				{!state ? (
					<button
						onClick={play}
						className=' mt-28 flex items-center hover:scale-125 transition-all z-20'
					>
						<BiPlay className='w-12 h-12 text-white' />
						<div className='text-3xl text-white font-bold'>My wave</div>
					</button>
				) : (
					<button
						onClick={stop}
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
