import { FC } from 'react'

interface TrackProgressProps {
	left: number
	right: number
	onChange: (e: any) => void
	absolyte: boolean
}

const TrackProgress: FC<TrackProgressProps> = ({
	left,
	right,
	onChange,
	absolyte
}) => {
	return (
		<div className='flex'>
			<input
				className={absolyte ? 'progress' : ''}
				min={0}
				max={right}
				value={left}
				onChange={onChange}
				type='range'
			/>
		</div>
	)
}

export default TrackProgress
