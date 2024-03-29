import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { creatingPlaylistSliceReducer } from './slices/creatingPlaylistsArray'
import { favoritesAlbumsSliceReducer } from './slices/favouriteAlbum.slice'
import { favoritesAuthorsReducer } from './slices/favouriteAuthors.slice'
import { favoritesSliceReducer } from './slices/favouriteMusic.slice'
import { handleBlockReducer } from './slices/handleBlock.slice'
import { handleAuthorPageReducer } from './slices/handleBlock_author.slice copy'
import { handleCollectionReducer } from './slices/handleBlock_collection.slice'
import { handleStreamsReducer } from './slices/handleBlock_streams.slice'
import { handleGenreReducer } from './slices/handleGenre.slice'
import { listenedSliceReducer } from './slices/listened.slice'
import { playerReducer } from './slices/player.slice'
import { playlistMenuReducer } from './slices/playlistMenu.slice'

export const store = configureStore({
	reducer: {
		handleBlock: handleBlockReducer,
		player: playerReducer,
		listened: listenedSliceReducer,
		handleGenre: handleGenreReducer,
		handleCollection: handleCollectionReducer,
		favoritesSlice: favoritesSliceReducer,
		playlistMenu: playlistMenuReducer,
		creatingPlaylist: creatingPlaylistSliceReducer,
		handleStreams: handleStreamsReducer,
		handleAuthorPageBlock: handleAuthorPageReducer,
		favouriteAlbums: favoritesAlbumsSliceReducer,
		favoritesAuthor: favoritesAuthorsReducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware()
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
