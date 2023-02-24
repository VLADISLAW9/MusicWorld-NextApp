import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { handleBlockReducer } from './slices/handleBlock.slice'

export const store = configureStore({
	reducer: {
		handleBlock: handleBlockReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
