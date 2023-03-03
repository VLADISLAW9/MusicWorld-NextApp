import { Slider } from '@mui/material'
import { FC } from 'react'

interface TrackProgressProps {
	left: number
	right: number
	onChange: (e: any) => void
	absolute: boolean
	ref: any
}

const TrackVolume: FC<TrackProgressProps> = ({
	left,
	right,
	onChange,
	absolute,
	ref
}) => {
	return (
		<div className='flex z-50 absolute h-40 bottom-20 right-3 bg-[#222] px-1 py-5'>
			<Slider
				ref= {ref}
				orientation='vertical'
				className={absolute ? 'progress' : 'text-[#FFCC00]'}
				min={0}
				max={right}
				value={left}
				onChange={onChange}
			/>
		</div>
	)
}

export default TrackVolume
