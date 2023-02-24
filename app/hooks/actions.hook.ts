import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleBlockActions } from '../store/slices/handleBlock.slice'


const actions = {
	...handleBlockActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
