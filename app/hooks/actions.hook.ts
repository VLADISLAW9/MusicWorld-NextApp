import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { handleBlockActions } from '../store/slices/handleBlock.slice'
import { playerAction } from '../store/slices/player.slice'

const actions = {
	...handleBlockActions,
	...playerAction
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}
