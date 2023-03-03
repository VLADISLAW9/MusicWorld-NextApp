import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlayerState {
	active: null | any
	currentTime: number
	duration: number
	volume: number
	pause: boolean
}

const initialState: PlayerState = {
	active: null,
	currentTime: 0,
	duration: 0,
	volume: 100,
	pause: true
}

export const playerSlice = createSlice({
	name: 'player',
	initialState,
	reducers: {
		playTrack(state) {
			state.pause = false
		},
		pauseTrack(state) {
			state.pause = true
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
			state.active = action.payload
			state.duration = 0
			state.currentTime = 0
		}
	}
})

export const playerAction = playerSlice.actions
export const playerReducer = playerSlice.reducer
