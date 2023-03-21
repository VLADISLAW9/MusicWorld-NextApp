import { IPlaylist } from '@/app/types/IPlaylist'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlaylistMenu {
	activePlaylist: IPlaylist | null
	statePlaylistMenu: boolean
}

const initialState: PlaylistMenu = {
	activePlaylist: null,
	statePlaylistMenu: false
}

export const PlaylistMenuSlice = createSlice({
	name: 'PlaylistMenu',
	initialState,
	reducers: {
		openPlaylistMenu(state, action: PayloadAction<IPlaylist>) {
			state.activePlaylist = action.payload
			state.statePlaylistMenu = true
		},
		closePlaylistMenu(state) {
			state.activePlaylist = null
			state.statePlaylistMenu = false
		}
	}
})

export const playlistMenuActions = PlaylistMenuSlice.actions
export const playlistMenuReducer = PlaylistMenuSlice.reducer
