import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { handleBlockReducer } from './slices/handleBlock.slice'
import { playerReducer } from './slices/player.slice'

export const store = configureStore({
	reducer: {
		handleBlock: handleBlockReducer,
		player: playerReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
