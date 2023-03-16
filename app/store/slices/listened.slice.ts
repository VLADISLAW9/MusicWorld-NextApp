import { IMusic } from '@/app/types/IMusic'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ActiveBlockState {
	listened: IMusic[]
}

const initialState: ActiveBlockState = {
	listened: []
}

export const listenedSlice = createSlice({
	name: 'Listened',
	initialState,
	reducers: {
		addToListened(state, action: PayloadAction<IMusic>) {
			state.listened.push(action.payload)
		}
	}
})

export const listenedSliceAction = listenedSlice.actions
export const listenedSliceReducer = listenedSlice.reducer
