import { IMusic } from '@/app/types/IMusic'
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
		},
		renameActivePlaylist(state, action: PayloadAction<string>) {
			const newName: string = action.payload

			if (state.activePlaylist?.name) {
				state.activePlaylist.name = newName
			}
		}
	}
})

export const playlistMenuActions = PlaylistMenuSlice.actions
export const playlistMenuReducer = PlaylistMenuSlice.reducer
