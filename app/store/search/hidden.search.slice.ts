import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface IHandleSearch {
	searchState: boolean
}

const initialState: IHandleSearch = {
	searchState: false,
}

export const handleSearchStateSlice = createSlice({
	name: 'handleSearchState',
	initialState,
	reducers: {
		handleSearch: (state, action: PayloadAction<boolean>) => {
			state.searchState = action.payload
		},
	},
})

export const handleSearchStateAction = handleSearchStateSlice.actions
export const handleSearchStateReducer = handleSearchStateSlice.reducer
