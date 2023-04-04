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
		},
		removeTrackFromPlaylist(state, action: PayloadAction<any>) {
			const playlist: IPlaylist = action.payload.activePlaylist
			const music: IMusic = action.payload.i

			state.creatingPlaylistArray.filter(
				pl => pl._id === playlist._id
			)[0].tracks = state.creatingPlaylistArray
				.filter(pl => pl._id === playlist._id)[0]
				.tracks.filter(m => m._id !== music._id)
		},
		renamePlaylistName(state, action: PayloadAction<any>) {
			const newName: string = action.payload.newName
			const currentPlaylist: IPlaylist = action.payload.playlist

			state.creatingPlaylistArray.filter(
				pl => pl._id === currentPlaylist._id
			)[0].name = newName
		},
		deletePlaylist(state, action: PayloadAction<IPlaylist>) {
			const playlist = action.payload

			state.creatingPlaylistArray = state.creatingPlaylistArray.filter(
				pl => pl._id !== playlist._id
			)
		}
	}
})

export const creatingPlaylistSliceActions = creatingPlaylistSlice.actions
export const creatingPlaylistSliceReducer = creatingPlaylistSlice.reducer
