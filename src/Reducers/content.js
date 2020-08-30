import { SET_SEARCH_TEXT, LOAD_INITIAL_DATA } from '../Actions';
let initialState = {
	searchText: '',
	items: [],
	searchItems: [],
	searchError: null
}
const content = (state = initialState, action) => {
	switch (action.type) {
		case SET_SEARCH_TEXT:{
			try {
				const regex = RegExp(action.payload, 'i');
				return {
					...state,
					searchText: action.payload,
					searchItems: state.items.filter(item => {
						return regex.test(item.name);
					}),
					searchError: null
				}
			} catch (error) {
				return {
					...state,
					searchText: action.payload,
					searchError: "Invalid expression. Try Again"
				}
			}
		}
		case LOAD_INITIAL_DATA: {
			return {
				...state,
				items: [...state.items, ...action.payload],
				searchItems: [...state.items, ...action.payload]
			}
		}
		default: return state;
	}
}

export default content;