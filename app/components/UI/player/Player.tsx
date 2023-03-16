import { useActions } from '@/app/hooks/actions.hook'
import { useOutside } from '@/app/hooks/outside.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusicProps } from '@/pages'
import { CardMedia, Slider } from '@mui/material'
import cn from 'clsx'
import { FC, useEffect } from 'react'
import { BiPause, BiPlay, BiSkipNext } from 'react-icons/bi'
import { BsVolumeUpFill } from 'react-icons/bs'
import TrackProgress from './TrackProgress'

let audio: any

const Player: FC<IMusicProps> = ({ music }) => {
	const {
		stateTrack,
		stateMyWave,
		volume,
		activeTrack,
		duration,
		currentTime,
		activeMyWave,
		historyMusic
	} = useAppSelector(state => state.player)

	const { listened } = useAppSelector(state => state.listened)

	const { isShow, setIsShow, ref } = useOutside(false)

	const handleClick = () => {
		setIsShow(!isShow)
	}

	const {
		pauseMyWave,
		playMyWave,
		playTrack,
		pauseTrack,
		setVolume,
		setActiveTrack,
		setActiveMyWave,
		setCurrentTime,
		setDuration,
		addToListened,
		addToHistory
	} = useActions()

	useEffect(() => {
		if (!audio) {
			audio = new Audio()
		} else {
			setTrack()
			play_track()
		}
	}, [activeTrack])

	useEffect(() => {
		if (!audio) {
			audio = new Audio()
		} else {
			setMyWave()
			play_mywave()
		}
	}, [activeMyWave])

	const setMyWave = () => {
		if (activeMyWave) {
			audio.volume = volume / 100
			audio.onloadedmetadata = () => {
				setDuration(audio.duration)
			}
			audio.ontimeupdate = () => {
				setCurrentTime(audio.currentTime)
			}
			audio.src = activeMyWave.music
		}
	}

	useEffect(() => {
		if (currentTime !== 0 && duration !== 0) {
			if (currentTime === duration) {
				if (activeMyWave) {
					if (!listened.includes(activeMyWave)) {
						addToListened(activeMyWave)
					}
					addToHistory(activeMyWave)
					nextMusic()
				} else if (activeTrack) {
					if (!listened.includes(activeTrack)) {
						addToListened(activeTrack)
					}
					addToHistory(activeTrack)
					nextMusic()
				}
			}
		}
	}, [currentTime])

	const setTrack = () => {
		if (activeTrack) {
			audio.volume = volume / 100
			audio.onloadedmetadata = () => {
				setDuration(audio.duration)
			}
			audio.ontimeupdate = () => {
				setCurrentTime(audio.currentTime)
			}
			audio.src = activeTrack.music
		}
	}

	useEffect(() => {
		if (stateTrack) {
			playTrack()
			audio.play()
		} else {
			pauseTrack()
			audio.pause()
		}
	}, [stateTrack])

	useEffect(() => {
		if (stateMyWave) {
			playMyWave()
			audio.play()
		} else {
			pauseMyWave()
			audio.pause()
		}
	}, [stateMyWave])

	const play_track = () => {
		playTrack()

		audio.play()
	}

	const stop_track = () => {
		pauseTrack()
		audio.pause()
	}

	const play_mywave = () => {
		playMyWave()
		audio.play()
	}

	const stop_mywave = () => {
		pauseMyWave()
		audio.pause()
	}

	const nextMusic = () => {
		let number = Math.floor(Math.random() * music.length)
		if (activeMyWave) {
			setActiveMyWave(music[number])
		} else if (activeTrack) {
			setActiveTrack(music[number])
		}
	}

	const prevMusic = () => {
		if (historyMusic.length > 0) {
			if (historyMusic.length - 1) {
				if (activeMyWave) {
					setActiveMyWave(historyMusic[historyMusic.length - 2])
				} else if (activeTrack) {
					setActiveTrack(historyMusic[historyMusic.length - 1])
				}
			}
		}
	}

	const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.volume = Number(e.target.value) / 100
		setVolume(Number(e.target.value))
	}

	const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.currentTime = Number(e.target.value)
		setCurrentTime(Number(e.target.value))
	}

	if (activeTrack) {
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
							<button onClick={prevMusic}>
								<BiSkipNext className='rotate-180 w-10 h-10 text-[#757575] hover:text-white transition-colors' />
							</button>
							{!stateTrack ? (
								<button onClick={play_track}>
									<BiPlay className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
								</button>
							) : (
								<button onClick={stop_track}>
									<BiPause className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
								</button>
							)}

							<button onClick={nextMusic}>
								<BiSkipNext className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
							</button>
						</div>
						<div className='flex items-center w-[70%]'>
							<div>
								<CardMedia
									component='img'
									sx={{ height: 50, width: 50 }}
									image={activeTrack.image}
								/>
							</div>
							<div className='ml-5'>
								<h1 className='text-base font-semibold text-white'>
									{activeTrack?.name}
								</h1>
								<p className='text-sm font-light text-white'>
									{activeTrack?.author}
								</p>
							</div>
						</div>
						<div className='flex relative'>
							<button onClick={handleClick}>
								<BsVolumeUpFill
									className={cn(
										'hover:text-white transition-all w-7 h-7 text-[#757575] mr-3'
									)}
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
	} else if (activeMyWave) {
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
							<button onClick={prevMusic}>
								<BiSkipNext className='rotate-180 w-10 h-10 text-[#757575] hover:text-white transition-colors' />
							</button>
							{!stateMyWave ? (
								<button onClick={play_mywave}>
									<BiPlay className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
								</button>
							) : (
								<button onClick={stop_mywave}>
									<BiPause className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
								</button>
							)}

							<button onClick={nextMusic}>
								<BiSkipNext className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
							</button>
						</div>
						<div className='flex items-center w-[70%]'>
							<div>
								<CardMedia
									component='img'
									sx={{ height: 50, width: 50 }}
									image={activeMyWave.image}
								/>
							</div>
							<div className='ml-5'>
								<h1 className='text-base font-semibold text-white'>
									{activeMyWave.name}
								</h1>
								<p className='text-sm font-light text-white'>
									{activeMyWave.author}
								</p>
							</div>
						</div>
						<div className='flex relative'>
							<button onClick={handleClick}>
								<BsVolumeUpFill
									className={cn(
										'hover:text-white transition-all w-7 h-7 text-[#757575] mr-3'
									)}
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
	} else {
		return null
	}
}

export default Player
