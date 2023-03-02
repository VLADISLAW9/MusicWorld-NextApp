import { FC } from 'react'

interface TrackProgressProps {
	left: number
	right: number
	onChange: (e: any) => void
	absolute: boolean
}

const TrackProgress: FC<TrackProgressProps> = ({
	left,
	right,
	onChange,
	absolute
}) => {
	return (
		<div className='flex'>
			<input
				className={absolute ? 'progress' : ''}
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
