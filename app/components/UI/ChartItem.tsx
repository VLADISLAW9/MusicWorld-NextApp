import { IMusic } from '@/app/types/IMusic'
import { CardMedia } from '@mui/material'
import { FC, useState } from 'react'
import { BsPlayFill } from 'react-icons/bs'
import { TbCrown } from 'react-icons/tb'

interface IChartItem {
	track: IMusic
	index: number
}

const ChartItem: FC<IChartItem> = ({ track, index }) => {
	const [hover, setHover] = useState(false)

	return (
		<li
			onMouseEnter={() => {
				setHover(true)
			}}
			onMouseLeave={() => {
				setHover(false)
			}}
			className='px-2 py-1 border-2 cursor-pointer border-[#181818] hover:border-[#FFCC00] flex items-center justify-between'
		>
			<div className='flex items-center'>
				<div className='flex flex-col '>
					<h1 className='mr-3 w-4 text-white font-semibold'>{index + 1}</h1>
					{index + 1 === 1 && (
						<TbCrown className='w-5 h-5 -translate-x-[5px] text-[#FFCC00]' />
					)}
				</div>
				<div className='relative'>
					<CardMedia
						className={hover ? 'opacity-60' : ''}
						component='img'
						sx={{ height: 55, width: 55 }}
						image={track.image}
						alt='Paella dish'
					/>
					{hover && (
						<button className='absolute bg-[#FFCC00] rounded-full p-2 top-[12px] left-[10px] opacity-80 hover:opacity-100 transition-opacity'>
							<BsPlayFill
								className='translate-x-px
							'
							/>
						</button>
					)}
				</div>

				<div className='ml-3'>
					<h1 className='text-white text-base'>{track.name}</h1>
					<p className='text-white/50 text-sm font-light'>{track.author}</p>
				</div>
			</div>

			<div className='flex'>
				<h1 className='text-white/50 text-sm font-light'>1:40</h1>
			</div>
		</li>
	)
}

export default ChartItem
