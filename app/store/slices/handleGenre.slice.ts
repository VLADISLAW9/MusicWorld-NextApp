import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveGenreState {
	activeGenre: string | null
}

const initialState: ActiveGenreState = {
	activeGenre: null
}

export const handleGenreSlice = createSlice({
	name: 'handleGenre',
	initialState,
	reducers: {
		handleGenre(state, action: PayloadAction<string>) {
			state.activeGenre = action.payload
		}
	}
})

export const handleGenreActions = handleGenreSlice.actions
export const handleGenreReducer = handleGenreSlice.reducer
