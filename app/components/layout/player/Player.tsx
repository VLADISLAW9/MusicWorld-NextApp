import { useActions } from '@/app/hooks/actions.hook'
import { useOutside } from '@/app/hooks/outside.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { CardMedia, Slider } from '@mui/material'
import { FC, useEffect } from 'react'
import { BiPause, BiPlay, BiSkipNext } from 'react-icons/bi'
import { BsVolumeUpFill } from 'react-icons/bs'
import TrackProgress from './TrackProgress'
import cn from 'clsx'

let audio: any

const Player: FC = () => {
	const { pause, volume, active, duration, currentTime } = useAppSelector(
		state => state.player
	)

	const { isShow, setIsShow, ref } = useOutside(false)

	const handleClick = () => {
		setIsShow(!isShow)
	}

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
					<div className='flex relative'>
						<button onClick={handleClick}>
							<BsVolumeUpFill
								className={
									cn('hover:text-white transition-all w-7 h-7 text-[#757575] mr-3')
								}
							/>
						</button>
						{isShow && (
							<div className='flex z-50 absolute h-44 shadow-2xl bottom-20 right-3 rounded-md bg-[#222] px-1 py-6'>
								<Slider
									className='text-[#FFCC00]'
									ref={ref}
									orientation='vertical'
									min={0}
									max={100}
									value={volume}
									onChange={changeVolume}
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Player
