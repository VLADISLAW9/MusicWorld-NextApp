import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveCollectionState {
	activeCollection: string
}

const initialState: ActiveCollectionState = {
	activeCollection: 'Playlists'
}

export const handleCollectionSlice = createSlice({
	name: 'handleCollection',
	initialState,
	reducers: {
		handleCollection(state, action: PayloadAction<string>) {
			state.activeCollection = action.payload
		}
	}
})

export const handleCollectionActions = handleCollectionSlice.actions
export const handleCollectionReducer = handleCollectionSlice.reducer
