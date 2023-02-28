import { FC } from 'react'
import { IconType } from 'react-icons'

interface IMoodItemProps {
	genre: string
	Icon: IconType
	color: string
}

const MoodItem: FC<IMoodItemProps> = ({ genre, Icon, color }) => {
	return (
		<li className='cursor-pointer'>
			<div
				style={{ backgroundColor: color }}
				className='w-[200px] h-[200px] flex flex-col justify-center items-center text-white'
			>
				<Icon className='w-20 h-20 ' />
				<h1 className='mt-5 text-xl font-semibold'>{genre}</h1>
			</div>
		</li>
	)
}

export default MoodItem
