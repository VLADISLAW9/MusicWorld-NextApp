import { IMusic } from '@/app/types/IMusic'
import { IPlaylist } from '@/app/types/IPlaylist'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface creatingPlaylistState {
	creatingPlaylistArray: IPlaylist[]
}

const initialState: creatingPlaylistState = {
	creatingPlaylistArray: []
}

export const creatingPlaylistSlice = createSlice({
	name: 'creatingPlaylistSlice',
	initialState,
	reducers: {
		createPlaylist(state, action: PayloadAction<IPlaylist>) {
			state.creatingPlaylistArray.push(action.payload)
		},
		// addTrackToPlaylist(state, action: PayloadAction<IMusic | IPlaylist>) {
		// 	state.creatingPlaylistArray.filter(
		// 		playlist => playlist._id === action.payload._id
		// 	).push(action.payload)
		// }
	}
})

export const creatingPlaylistSliceActions = creatingPlaylistSlice.actions
export const creatingPlaylistSliceReducer = creatingPlaylistSlice.reducer
