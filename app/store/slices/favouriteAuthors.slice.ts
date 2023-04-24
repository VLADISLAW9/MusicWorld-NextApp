import { IAuthor } from '@/app/types/IAuthor'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveBlockState {
	favoritesAuthors: IAuthor[]
}

const initialState: ActiveBlockState = {
	favoritesAuthors: []
}

export const favoritesAuthorsSlice = createSlice({
	name: 'favoritesSlice',
	initialState,
	reducers: {
		addAuthorToFav(state, action: PayloadAction<IAuthor>) {
			state.favoritesAuthors.push(action.payload)
		},
		removeAuthorToFav(state, action: PayloadAction<IAuthor>) {
			state.favoritesAuthors = state.favoritesAuthors.filter(
				i => i._id !== action.payload._id
			)
		}
	}
})

export const favoritesAuthorsSliceActions = favoritesAuthorsSlice.actions
export const favoritesAuthorsReducer = favoritesAuthorsSlice.reducer
