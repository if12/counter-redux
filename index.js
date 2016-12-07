import React from 'react';
import { render } from 'react-dom'

import Counter from './containers/Counter'
import configureStore from './stores/';
const store = configureStore();

render(
	<Counter store={ store }/>,
	document.getElementById('app')
)