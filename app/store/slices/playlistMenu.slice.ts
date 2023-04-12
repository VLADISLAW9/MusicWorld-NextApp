import { IMusic } from '@/app/types/IMusic'
import { IPlaylist } from '@/app/types/IPlaylist'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PlaylistMenu {
	activePlaylistMenu: IPlaylist | null
	statePlaylistMenu: boolean
}

const initialState: PlaylistMenu = {
	activePlaylistMenu: null,
	statePlaylistMenu: false
}

export const PlaylistMenuSlice = createSlice({
	name: 'PlaylistMenu',
	initialState,
	reducers: {
		openPlaylistMenu(state, action: PayloadAction<IPlaylist>) {
			state.activePlaylistMenu = action.payload
			state.statePlaylistMenu = true
		},
		closePlaylistMenu(state) {
			state.activePlaylistMenu = null
			state.statePlaylistMenu = false
		},
		renameActivePlaylist(state, action: PayloadAction<string>) {
			const newName: string = action.payload

			if (state.activePlaylistMenu?.name) {
				state.activePlaylistMenu.name = newName
			}
		}
	}
})

export const playlistMenuActions = PlaylistMenuSlice.actions
export const playlistMenuReducer = PlaylistMenuSlice.reducer
