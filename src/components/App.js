import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increment, decrement } from '../actions'

class App extends Component {
  render () {
    const props = this.props
    console.info('props', this.props)
    console.info('props', props)

    return (
      <>
        <div>value:{ props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </>
    )
  }
 }

 const mapStateToProps = state => ({ value: state.counts.value })

 const mapDispatchToProps = ({ increment, decrement })

 export default connect(mapStateToProps, mapDispatchToProps)(App)