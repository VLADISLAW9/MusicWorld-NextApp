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
		addTrackToPlaylist(state, action: PayloadAction<any>) {
			const playlist: IPlaylist = action.payload.playlist
			const music: IMusic = action.payload.activeTrack

			state.creatingPlaylistArray
				.filter(el => el._id === playlist._id)
				.map(pl => pl.tracks.push(music))
		}
	}
})

export const creatingPlaylistSliceActions = creatingPlaylistSlice.actions
export const creatingPlaylistSliceReducer = creatingPlaylistSlice.reducer
