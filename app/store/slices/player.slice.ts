import { IMusic } from '@/app/types/IMusic'
import { IPlaylist } from '@/app/types/IPlaylist'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
	isPlaying: boolean
	historyMusic: IMusic[]
	activeTrack: null | IMusic
	activeMyWave: null | IMusic
	activePlaylist: null | IPlaylist
	currentTime: number
	duration: number
	volume: number
	stateTrack: boolean
	stateMyWave: boolean
	statePlaylist: boolean
}

const initialState: PlayerState = {
	isPlaying: false,
	historyMusic: [],
	activeTrack: null,
	activeMyWave: null,
	activePlaylist: null,
	currentTime: 0,
	duration: 0,
	volume: 100,
	stateTrack: false,
	stateMyWave: false,
	statePlaylist: false
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		playTrack(state) {
			state.isPlaying = true
			state.stateTrack = true
			state.stateMyWave = false
		},
		pauseTrack(state) {
			state.isPlaying = false
			state.stateTrack = false
		},
		playPlaylist(state) {
			state.statePlaylist = true
		},
		pausePlaylist(state) {
			state.statePlaylist = true
		},
		playMyWave(state) {
			state.isPlaying = true
			state.stateMyWave = true
			state.stateTrack = false
		},
		pauseMyWave(state) {
			state.isPlaying = false
			state.stateMyWave = false
		},
		setCurrentTime(state, action: PayloadAction<number>) {
			state.currentTime = action.payload
		},
		setVolume(state, action: PayloadAction<number>) {
			state.volume = action.payload
		},
		setDuration(state, action: PayloadAction<number>) {
			state.duration = action.payload
		},
		setActiveTrack(state, action: PayloadAction<IMusic>) {
			state.activeMyWave = null
			state.activeTrack = action.payload
			if (!state.historyMusic.includes(action.payload)) {
				state.historyMusic.push(action.payload)
			}
			state.duration = 0
			state.currentTime = 0
		},
		setActiveMyWave(state, action: PayloadAction<IMusic>) {
			state.activePlaylist = null
			state.activeTrack = null
			state.activeMyWave = action.payload
			if (!state.historyMusic.includes(action.payload)) {
				state.historyMusic.push(action.payload)
			}
			state.duration = 0
			state.currentTime = 0
		},
		setActivePlaylist(state, action: PayloadAction<IPlaylist | null>) {
			state.activeMyWave = null
			state.activePlaylist = action.payload
			state.duration = 0
			state.currentTime = 0
		},
		addToHistory(state, action: PayloadAction<IMusic>) {
			if (!state.historyMusic.includes(action.payload)) {
				state.historyMusic.push(action.payload)
			}
		}
	}
})

export const playerAction = playerSlice.actions
export const playerReducer = playerSlice.reducer
