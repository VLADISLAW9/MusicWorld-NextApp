import { IMusic } from '@/app/types/IMusic'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveBlockState {
	favorites: IMusic[]
}

const initialState: ActiveBlockState = {
	favorites: []
}

export const favoritesSlice = createSlice({
	name: 'favoritesSlice',
	initialState,
	reducers: {
		addToFav(state, action: PayloadAction<IMusic>) {
			state.favorites.push(action.payload)
		},
		removeToFav(state, action: PayloadAction<IMusic>) {
			state.favorites = state.favorites.filter(
				i => i._id !== action.payload._id
			)
		}
	}
})

export const favoritesSliceActions = favoritesSlice.actions
export const favoritesSliceReducer = favoritesSlice.reducer
