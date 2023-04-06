import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveBlockState {
	activeStream: string
}

const initialState: ActiveBlockState = {
	activeStream: 'Review'
}

export const handleBlockSlice = createSlice({
	name: 'handleBlock',
	initialState,
	reducers: {
		handleStreams(state, action: PayloadAction<string>) {
			state.activeStream = action.payload
		}
	}
})

export const handleStreamsActions = handleBlockSlice.actions
export const handleStreamsReducer = handleBlockSlice.reducer
