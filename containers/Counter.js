import { connect } from 'react-redux'
import { increaseAction } from '../actions/'
import Counter from '../components/Counter/'

function mapStateToProps(state) {
	return {
		count: state.counter.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
		onIncreaseClick: () => dispatch(increaseAction())
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)