import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'

import './index.css'
import reducer from './reducers'

const store = createStore(reducer)
const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  root
);
