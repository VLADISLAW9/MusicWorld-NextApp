import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleSearchStateAction } from '../store/search/hidden.search.slice'

const actions = {
	...handleSearchStateAction
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
