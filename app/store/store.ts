import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { handleSearchStateReducer } from './search/hidden.search.slice'

export const store = configureStore({
	reducer: {
		handleSearchState: handleSearchStateReducer,
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware(),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
