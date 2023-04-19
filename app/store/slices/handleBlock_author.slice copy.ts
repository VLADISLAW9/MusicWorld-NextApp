import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveAuthorPageState {
	activeAuthorPageBlock: string
}

const initialState: ActiveAuthorPageState = {
	activeAuthorPageBlock: 'Main'
}

export const handleAuthorPageSlice = createSlice({
	name: 'handleAuthorPage',
	initialState,
	reducers: {
		handleAuthorPageBlock(state, action: PayloadAction<string>) {
			state.activeAuthorPageBlock = action.payload
		}
	}
})

export const handleAuthorPageActions = handleAuthorPageSlice.actions
export const handleAuthorPageReducer = handleAuthorPageSlice.reducer
