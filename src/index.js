import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import EventsIndex from './components/events_index'
import thunk from 'redux-thunk'

import './index.css'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))
const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <EventsIndex/>
  </Provider>,
  root
);
