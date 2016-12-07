function counter(state = { count: 0 }, action) {
	switch (action.type) {
		case 'increase':
			return {
				count: state.count + 1
			}
			break;
		default:
			return state;
	}
}

export default counter