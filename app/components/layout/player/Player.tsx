import { useActions } from '@/app/hooks/actions.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { CardMedia } from '@mui/material'
import { FC, useEffect } from 'react'
import { BiPause, BiPlay, BiSkipNext } from 'react-icons/bi'
import { BsVolumeUpFill } from 'react-icons/bs'
import TrackProgress from './TrackProgress'

let audio: any

const Player: FC = () => {
	const { pause, volume, active, duration, currentTime } = useAppSelector(
		state => state.player
	)

	const {
		playTrack,
		pauseTrack,
		setVolume,
		setActiveTrack,
		setCurrentTime,
		setDuration
	} = useActions()

	useEffect(() => {
		if (!audio) {
			audio = new Audio()
		} else {
			setAudio()
			play()
		}
	}, [active])

	const setAudio = () => {
		if (active) {
			audio.volume = volume / 100
			audio.onloadedmetadata = () => {
				setDuration(audio.duration)
			}
			audio.ontimeupdate = () => {
				setCurrentTime(audio.currentTime)
			}
			audio.src = active.music
		}
	}

	useEffect(() => {
		if (!pause) {
			playTrack()
			audio.play()
		} else {
			pauseTrack()
			audio.pause()
		}
	}, [pause])

	const play = () => {
		playTrack()
		audio.play()
	}

	const stop = () => {
		pauseTrack()
		audio.pause()
	}

	const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.volume = Number(e.target.value) / 100
		setVolume(Number(e.target.value))
	}

	const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.currentTime = Number(e.target.value)
		setCurrentTime(Number(e.target.value))
	}

	if (!active) {
		return null
	}

	return (
		<div className='bar'>
			<div className='bar__content'>
				<TrackProgress
					absolute={true}
					left={currentTime}
					right={duration}
					onChange={changeCurrentTime}
				/>
				<div className='controls flex items-center justify-between'>
					<div className='flex items-center'>
						{pause ? (
							<button onClick={play}>
								<BiPlay className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
							</button>
						) : (
							<button onClick={stop}>
								<BiPause className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
							</button>
						)}

						<button>
							<BiSkipNext className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
						</button>
					</div>
					<div className='flex items-center w-[70%]'>
						<div>
							<CardMedia
								component='img'
								sx={{ height: 50, width: 50 }}
								image={active.image}
							/>
						</div>
						<div className='ml-5'>
							<h1 className='text-base font-semibold text-white'>
								{active?.name}
							</h1>
							<p className='text-sm font-light text-white'>{active?.author}</p>
						</div>
					</div>
					<div className='flex'>
						<BsVolumeUpFill className='w-7 h-7 text-[#757575] mr-3' />
						<TrackProgress
							absolute={false}
							left={volume}
							right={100}
							onChange={changeVolume}
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Player
