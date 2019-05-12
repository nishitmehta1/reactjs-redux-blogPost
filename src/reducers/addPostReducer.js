import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
	listItems: [],
	listItem: []
}

export default function(state=initialState, action) {
	switch (action.type) {
		case NEW_POST:
			return {
				...state,
				listItem: action.payload
			}
		case FETCH_POSTS:
			return {
				...state,
				listItems: action.payload
			}
		default:
			return state
	}
}