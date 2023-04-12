import { useActions } from '@/app/hooks/actions.hook'
import { useOutside } from '@/app/hooks/outside.hook'
import { useAppSelector } from '@/app/hooks/selector.hook'
import { IMusic } from '@/app/types/IMusic'
import { IMusicProps } from '@/pages'
import { CardMedia, Slider } from '@mui/material'
import cn from 'clsx'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { BiHeart, BiPause, BiPlay, BiPlus, BiSkipNext } from 'react-icons/bi'
import { BsVolumeUpFill } from 'react-icons/bs'
import AlertWindows from '../AlertWindows'
import TrackProgress from './TrackProgress'

let audio: any

const Player: NextPage<IMusicProps> = ({ music }) => {
	const {
		stateTrack,
		stateMyWave,
		volume,
		activeTrack,
		duration,
		currentTime,
		activeMyWave,
		historyMusic,
		activePlaylist,
		statePlaylist
	} = useAppSelector(state => state.player)

	const { favorites } = useAppSelector(state => state.favoritesSlice)

	const [isFav, setIsFav] = useState(false)

	const { listened } = useAppSelector(state => state.listened)

	const {
		isShow: isShowVol,
		setIsShow: setIsShowVol,
		ref: refVol
	} = useOutside(false)

	const {
		isShow: isShowPlaylists,
		setIsShow: setIsShowPlaylists,
		ref: refPlaylists
	} = useOutside(false)

	const handleVol = () => {
		setIsShowVol(!isShowVol)
	}

	const handlePlaylists = () => {
		setIsShowPlaylists(!isShowPlaylists)
	}

	const { creatingPlaylistArray } = useAppSelector(
		state => state.creatingPlaylist
	)

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
		addToHistory,
		addToFav,
		removeToFav,
		addTrackToPlaylist,
		setActivePlaylist,
		playPlaylist,
		pausePlaylist
	} = useActions()

	useEffect(() => {
		if (favorites.length > 0) {
			if (activeTrack) {
				for (let i = 0; i < favorites.length; i++) {
					if (favorites[i].name === activeTrack.name) {
						setIsFav(true)
					} else {
						setIsFav(false)
					}
				}
			} else if (activeMyWave) {
				for (let i = 0; i < favorites.length; i++) {
					if (favorites[i].name === activeMyWave.name) {
						setIsFav(true)
					} else {
						setIsFav(false)
					}
				}
			}
		}
	})

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
					if (!historyMusic.includes(activeMyWave)) {
						addToHistory(activeMyWave)
					}
					nextMusic()
				} else if (activeTrack) {
					if (!listened.includes(activeTrack)) {
						addToListened(activeTrack)
					}
					if (!historyMusic.includes(activeTrack)) {
						addToHistory(activeTrack)
					}
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

	const prevMusicInPlaylist = () => {
		if (activePlaylist && activePlaylist.tracks.length > 0) {
			const index = activePlaylist.tracks.indexOf(activeTrack)
			if (index > 0) {
				const prevTrack = activePlaylist.tracks[index - 1]
				setActiveTrack(prevTrack)
			}
		}
	}
	const nextMusicInPlaylist = () => {
		if (activePlaylist && activePlaylist.tracks.length > 0) {
			const index = activePlaylist.tracks.indexOf(activeTrack)
			if (index < activePlaylist.tracks.length - 1) {
				const nextTrack = activePlaylist.tracks[index + 1]
				setActiveTrack(nextTrack)
			}
		}
	}

	console.log(
		activePlaylist?.tracks.findIndex((i: IMusic) => i._id === activeTrack?._id)
	)

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
			if (historyMusic[1]) {
				if (activeMyWave) {
					if (
						historyMusic[historyMusic.findIndex(i => i === activeMyWave) - 1]
					) {
						setActiveMyWave(
							historyMusic[historyMusic.findIndex(i => i === activeMyWave) - 1]
						)
					}
				} else if (activeTrack) {
					if (
						historyMusic[historyMusic.findIndex(i => i === activeTrack) - 1]
					) {
						setActiveTrack(
							historyMusic[historyMusic.findIndex(i => i === activeTrack) - 1]
						)
					}
				}
			}
		} else {
			if (activeMyWave) {
				setActiveMyWave(activeMyWave)
			} else if (activeTrack) {
				setActiveTrack(activeTrack)
			}
		}
	}

	const [showAlert, setShowAlert] = useState(false)

	const handleAlertWindows = () => {
		setShowAlert(true)
	}

	useEffect(() => {
		let timeoutId: any
		if (showAlert) {
			timeoutId = setTimeout(() => {
				setShowAlert(false)
			}, 2000)
		}
		return () => clearTimeout(timeoutId)
	}, [showAlert])

	useEffect(() => {
		if (activeMyWave) {
			setIsFav(favorites.includes(activeMyWave))
		}

		if (activeTrack) {
			setIsFav(favorites.includes(activeTrack))
		}
	}, [favorites])

	const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.volume = Number(e.target.value) / 100
		setVolume(Number(e.target.value))
	}

	const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
		audio.currentTime = Number(e.target.value)
		setCurrentTime(Number(e.target.value))
	}

	if (activeTrack && activePlaylist === null) {
		return (
			<div className='bar'>
				<div className='bar__content'>
					<TrackProgress
						absolute={true}
						left={currentTime}
						right={duration}
						onChange={changeCurrentTime}
					/>
					{showAlert && <AlertWindows />}
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
							<div className='ml-5 flex'>
								{!isFav ? (
									<>
										<button
											onClick={() => {
												addToFav(activeTrack)
											}}
										>
											<BiHeart className='w-6 h-6 mt-1.5 text-[#757575] hover:text-white transition-colors ' />
										</button>{' '}
									</>
								) : (
									<>
										<button
											onClick={() => {
												removeToFav(activeTrack)
											}}
										>
											<BiHeart className='w-6 h-6 mt-1.5 text-[#FFCC00] hover:text-[#FFCC00]/80 transition-colors ' />
										</button>
									</>
								)}
								<div className='ml-3 mt-1.5 relative'>
									<button onClick={handlePlaylists}>
										<BiPlus className='w-7 h-7 mt-1.5  text-[#757575]' />
									</button>
									{isShowPlaylists && (
										<div
											className=' absolute bottom-14 -right-[85px] w-[200px] h-[240px] bg-[#222222]'
											ref={refPlaylists}
										>
											<h1 className='px-2 py-2 text-[#636363] text-sm'>
												Add music to playlist
											</h1>
											<ul className='overflow-y-scroll max-h-[350px]'>
												<li
													onClick={() => {
														setIsShowPlaylists(false)
														if (!favorites.includes(activeTrack)) {
															handleAlertWindows()
															addToFav(activeTrack)
														}
													}}
													className='px-2 py-1 cursor-pointer hover:bg-[#393939]'
												>
													<h1 className='text-white ml-5'>Me like</h1>
												</li>
												{creatingPlaylistArray.map((playlist, index) => (
													<li
														onClick={() => {
															setIsShowPlaylists(false)
															if (
																!creatingPlaylistArray
																	.filter(el => el._id === playlist._id)
																	.map(el => el.tracks)
																	.includes(activeTrack)
															) {
																handleAlertWindows()
																addTrackToPlaylist({ playlist, activeTrack })
															}
														}}
														key={playlist._id}
														className='px-2 py-1 cursor-pointer hover:bg-[#393939]'
													>
														<h1 className='text-white ml-5'>
															{playlist.name} {index + 1}
														</h1>
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className='flex relative'>
							<button onClick={handleVol}>
								<BsVolumeUpFill
									className={cn(
										'hover:text-white transition-all w-7 h-7 text-[#757575] mr-3'
									)}
								/>
							</button>
							{isShowVol && (
								<div className='flex z-50 absolute h-44 shadow-2xl bottom-20 right-3 rounded-md bg-[#222] px-1 py-6'>
									<Slider
										className='text-[#FFCC00]'
										ref={refVol}
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
					{showAlert && <AlertWindows />}
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
							<div className='ml-5 '>
								<h1 className='text-base font-semibold text-white'>
									{activeMyWave.name}
								</h1>
								<p className='text-sm font-light text-white'>
									{activeMyWave.author}
								</p>
							</div>
							<div className='ml-5 flex'>
								{!isFav ? (
									<>
										<button
											onClick={() => {
												addToFav(activeMyWave)
											}}
										>
											<BiHeart className='w-6 h-6 mt-1.5 text-[#757575] hover:text-white transition-colors ' />
										</button>{' '}
									</>
								) : (
									<>
										<button
											onClick={() => {
												removeToFav(activeMyWave)
											}}
										>
											<BiHeart className='w-6 h-6 mt-1.5 text-[#FFCC00] hover:text-[#FFCC00]/80 transition-colors ' />
										</button>
									</>
								)}
								<div className='ml-3 mt-1.5 relative'>
									<button onClick={handlePlaylists}>
										<BiPlus className='w-7 h-7 mt-1.5  text-[#757575]' />
									</button>
									{isShowPlaylists && (
										<div
											className=' absolute bottom-14 -right-[85px] w-[200px] h-[240px] bg-[#222222]'
											ref={refPlaylists}
										>
											<h1 className='px-2 py-2 text-[#636363] text-sm'>
												Add music to playlist
											</h1>
											<ul
												className={
													creatingPlaylistArray.length > 4
														? 'overflow-y-scroll max-h-[175px]'
														: ''
												}
											>
												<li
													onClick={() => {
														setIsShowPlaylists(false)
														if (!favorites.includes(activeMyWave)) {
															handleAlertWindows()
															addToFav(activeMyWave)
														}
													}}
													className='px-2 py-1 cursor-pointer hover:bg-[#393939]'
												>
													<h1 className='text-white ml-5'>Me like</h1>
												</li>
												{creatingPlaylistArray.map((playlist, index) => (
													<li
														onClick={() => {
															setIsShowPlaylists(false)
															if (
																!creatingPlaylistArray
																	.filter(el => el._id === playlist._id)[0]
																	.tracks.includes(activeMyWave)
															) {
																handleAlertWindows()
																addTrackToPlaylist({
																	playlist,
																	activeTrack: activeMyWave
																})
															}
														}}
														key={playlist._id}
														className='px-2 py-1 cursor-pointer hover:bg-[#393939]'
													>
														<h1 className='text-white ml-5'>{playlist.name}</h1>
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className='flex relative'>
							<button onClick={handleVol}>
								<BsVolumeUpFill
									className={cn(
										'hover:text-white transition-all w-7 h-7 text-[#757575] mr-3'
									)}
								/>
							</button>
							{isShowVol && (
								<div className='flex z-50 absolute h-44 shadow-2xl bottom-20 right-3 rounded-md bg-[#222] px-1 py-6'>
									<Slider
										className='text-[#FFCC00]'
										ref={refVol}
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
	} else if (activePlaylist) {
		return (
			<div className='bar'>
				<div className='bar__content'>
					<TrackProgress
						absolute={true}
						left={currentTime}
						right={duration}
						onChange={changeCurrentTime}
					/>
					{showAlert && <AlertWindows />}
					<div className='controls flex items-center justify-between'>
						<div className='flex items-center'>
							<button onClick={prevMusicInPlaylist}>
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

							<button onClick={nextMusicInPlaylist}>
								<BiSkipNext className='w-10 h-10 text-[#757575] hover:text-white transition-colors' />
							</button>
						</div>
						<div className='flex items-center w-[70%]'>
							<div>
								<CardMedia
									component='img'
									sx={{ height: 50, width: 50 }}
									image={activeTrack?.image}
								/>
							</div>
							<div className='ml-5 '>
								<h1 className='text-base font-semibold text-white'>
									{activeTrack?.name}
								</h1>
								<p className='text-sm font-light text-white'>
									{activeTrack?.author}
								</p>
							</div>
							<div className='ml-5 flex'>
								{!isFav ? (
									<>
										<button
											onClick={() => {
												addToFav(activeTrack)
											}}
										>
											<BiHeart className='w-6 h-6 mt-1.5 text-[#757575] hover:text-white transition-colors ' />
										</button>{' '}
									</>
								) : (
									<>
										<button
											onClick={() => {
												removeToFav(activeTrack)
											}}
										>
											<BiHeart className='w-6 h-6 mt-1.5 text-[#FFCC00] hover:text-[#FFCC00]/80 transition-colors ' />
										</button>
									</>
								)}
								<div className='ml-3 mt-1.5 relative'>
									<button onClick={handlePlaylists}>
										<BiPlus className='w-7 h-7 mt-1.5  text-[#757575]' />
									</button>
									{isShowPlaylists && (
										<div
											className=' absolute bottom-14 -right-[85px] w-[200px] h-[240px] bg-[#222222]'
											ref={refPlaylists}
										>
											<h1 className='px-2 py-2 text-[#636363] text-sm'>
												Add music to playlist
											</h1>
											<ul
												className={
													creatingPlaylistArray.length > 4
														? 'overflow-y-scroll max-h-[175px]'
														: ''
												}
											>
												<li
													onClick={() => {
														setIsShowPlaylists(false)
														if (!favorites.includes(activeTrack)) {
															handleAlertWindows()
															addToFav(activeTrack)
														}
													}}
													className='px-2 py-1 cursor-pointer hover:bg-[#393939]'
												>
													<h1 className='text-white ml-5'>Me like</h1>
												</li>
												{creatingPlaylistArray.map((playlist, index) => (
													<li
														onClick={() => {
															setIsShowPlaylists(false)
															if (
																!creatingPlaylistArray
																	.filter(el => el._id === playlist._id)[0]
																	.tracks.includes(activeTrack)
															) {
																handleAlertWindows()
																addTrackToPlaylist({
																	playlist,
																	activeTrack
																})
															}
														}}
														key={playlist._id}
														className='px-2 py-1 cursor-pointer hover:bg-[#393939]'
													>
														<h1 className='text-white ml-5'>{playlist.name}</h1>
													</li>
												))}
											</ul>
										</div>
									)}
								</div>
							</div>
						</div>
						<div className='flex relative'>
							<button onClick={handleVol}>
								<BsVolumeUpFill
									className={cn(
										'hover:text-white transition-all w-7 h-7 text-[#757575] mr-3'
									)}
								/>
							</button>
							{isShowVol && (
								<div className='flex z-50 absolute h-44 shadow-2xl bottom-20 right-3 rounded-md bg-[#222] px-1 py-6'>
									<Slider
										className='text-[#FFCC00]'
										ref={refVol}
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
