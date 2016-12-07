import React, { Component, PropTypes } from 'react';

export default class Counter extends Component {
	render() {
		const { count, onIncreaseClick } = this.props;

		return (
			<div>
				<h3>请点击Increase按钮</h3>
				<span>{ count }</span>
				<button onClick={ onIncreaseClick }>Increase</button>
			</div>
		);
	}
}

Counter.defaultProps = {
	count: 0
}

Counter.propTypes = {
	count: PropTypes.number.isRequired,
	onIncreaseClick: PropTypes.func.isRequired
}
