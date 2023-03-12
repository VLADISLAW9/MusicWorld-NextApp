import { IMusic } from '@/app/types/IMusic'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
	activeTrack: null | IMusic
	activeMyWave: null | IMusic
	currentTime: number
	duration: number
	volume: number
	stateTrack: boolean
	stateMyWave: boolean
}

const initialState: PlayerState = {
	activeTrack: null,
	activeMyWave: null,
	currentTime: 0,
	duration: 0,
	volume: 100,
	stateTrack: false,
	stateMyWave: false
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		playTrack(state) {
			state.stateTrack = true
			state.stateMyWave = false
		},
		pauseTrack(state) {
			state.stateTrack = false
		},
		playMyWave(state) {
			state.stateMyWave = true
			state.stateTrack = false
		},
		pauseMyWave(state) {
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
		setActiveTrack(state, action: PayloadAction<any>) {
			state.activeTrack = action.payload
			state.activeMyWave = null
			state.duration = 0
			state.currentTime = 0
		},
		setActiveMyWave(state, action: PayloadAction<any>) {
			state.activeMyWave = action.payload
			state.activeTrack = null
			state.duration = 0
			state.currentTime = 0
		}
	}
})

export const playerAction = playerSlice.actions
export const playerReducer = playerSlice.reducer
