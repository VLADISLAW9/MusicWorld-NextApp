import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { creatingPlaylistSliceActions } from '../store/slices/creatingPlaylistsArray'
import { favoritesAlbumsSliceActions } from '../store/slices/favouriteAlbum.slice'
import { favoritesAuthorsSliceActions } from '../store/slices/favouriteAuthors.slice'
import { favoritesSliceActions } from '../store/slices/favouriteMusic.slice'
import { handleBlockActions } from '../store/slices/handleBlock.slice'
import { handleAuthorPageActions } from '../store/slices/handleBlock_author.slice copy'
import { handleCollectionActions } from '../store/slices/handleBlock_collection.slice'
import { handleStreamsActions } from '../store/slices/handleBlock_streams.slice'
import { handleGenreActions } from '../store/slices/handleGenre.slice'
import { listenedSliceAction } from '../store/slices/listened.slice'
import { playerAction } from '../store/slices/player.slice'
import { playlistMenuActions } from '../store/slices/playlistMenu.slice'

const actions = {
	...handleBlockActions,
	...playerAction,
	...listenedSliceAction,
	...handleGenreActions,
	...handleCollectionActions,
	...favoritesSliceActions,
	...playlistMenuActions,
	...creatingPlaylistSliceActions,
	...handleStreamsActions,
	...handleAuthorPageActions,
	...favoritesAlbumsSliceActions,
	...favoritesAuthorsSliceActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
