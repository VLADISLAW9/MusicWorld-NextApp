import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { favoritesSliceActions } from '../store/slices/favourite.slice'
import { handleBlockActions } from '../store/slices/handleBlock.slice'
import { handleCollectionActions } from '../store/slices/handleBlock_collection.slice'
import { handleGenreActions } from '../store/slices/handleGenre.slice'
import { listenedSliceAction } from '../store/slices/listened.slice'
import { playerAction } from '../store/slices/player.slice'

const actions = {
	...handleBlockActions,
	...playerAction,
	...listenedSliceAction,
	...handleGenreActions,
	...handleCollectionActions,
	...favoritesSliceActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
