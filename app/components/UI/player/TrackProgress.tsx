import { Slider } from '@mui/material'
import { FC } from 'react'

interface TrackProgressProps {
	left: number
	right: number
	onChange: (e: any) => void
	absolute: boolean
	orientation: string
}

const TrackProgress: FC<TrackProgressProps> = ({
	left,
	right,
	onChange,
	absolute
}) => {
	return (
		<div className='flex'>
			<Slider
				className={absolute ? 'progress' : 'text-[#FFCC00]'}
				min={0}
				max={right}
				value={left}
				onChange={onChange}
			/>
		</div>
	)
}

export default TrackProgress
