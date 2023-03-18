import { FC, useState } from 'react'
import { BiPause, BiPlay } from 'react-icons/bi'
import { BsHeartFill } from 'react-icons/bs'

const FavouritePlaylist: FC = () => {
	const [hover, setHover] = useState(false)
	const [state, setState] = useState(false)

	const play = () => {
		setState(true)
	}

	const stop = () => {
		setState(false)
	}

	return (
		<li
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='relative cursor-pointer'
		>
			<div
				className={
					hover
						? 'opacity-70 w-[200px] h-[200px]   text-white '
						: 'w-[200px] h-[200px]  text-white'
				}
				style={{ backgroundColor: '#FF4377' }}
			>
				<div className='flex justify-end'>
					<BsHeartFill className='p-5 bg-white w-24 h-24 text-[#FF4377]' />
				</div>
			</div>
			<h1 className='mt-2 text-white font-light'>Me like</h1>
			{hover && (
				<ul className='absolute flex items-center top-[75px] left-[75px] gap-3'>
					<li>
						{!state ? (
							<button
								onClick={play}
								className='bg-[#FFCC00]/95 p-3  scale-110 rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 hover:scale-125 transition-all'
							>
								<BiPlay className='w-6 h-6 translate-x-0.5' />
							</button>
						) : (
							<button
								onClick={stop}
								className='bg-[#FFCC00]/95 p-3  scale-110 rounded-full text-stone-800/90 hover:bg-[#FFCC00] hover:text-stone-800 hover:scale-125 transition-all'
							>
								<BiPause className='w-6 h-6 	' />
							</button>
						)}
					</li>
				</ul>
			)}
		</li>
	)
}

export default FavouritePlaylist
