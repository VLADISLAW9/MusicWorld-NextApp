import { IPlaylist } from '@/app/types/IPlaylist'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface favoritesAlbums {
	favoritesAlbums: IPlaylist[]
}

const initialState: favoritesAlbums = {
	favoritesAlbums: []
}

export const favoritesAlbumSlice = createSlice({
	name: 'favoritesSlice',
	initialState,
	reducers: {
		addToFavAlbums(state, action: PayloadAction<IPlaylist>) {
			state.favoritesAlbums.push(action.payload)
		},
		removeFromFavAlbums(state, action: PayloadAction<IPlaylist>) {
			state.favoritesAlbums = state.favoritesAlbums.filter(
				i => i._id !== action.payload._id
			)
		}
	}
})

export const favoritesAlbumsSliceActions = favoritesAlbumSlice.actions
export const favoritesAlbumsSliceReducer = favoritesAlbumSlice.reducer
