import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveBlockState {
	activeBlock: string

}

const initialState: ActiveBlockState = {
	activeBlock: 'All'
}

export const handleBlockSlice = createSlice({
	name: 'handleBlock',
	initialState,
	reducers: {
		handleBlock(state, action: PayloadAction<string>) {
			state.activeBlock = action.payload
		},
	}
})

export const handleBlockActions = handleBlockSlice.actions
export const handleBlockReducer = handleBlockSlice.reducer
