import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import EventsIndex from './components/events_index'
import EventsNew from './components/events_new'


import './index.css'
import reducer from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))
const root = document.getElementById('root')

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/events/new" component={EventsNew}/>
        <Route exact path="/" component={EventsIndex}/>
      </Switch>    
    </BrowserRouter>
  
  </Provider>,
  root
);
