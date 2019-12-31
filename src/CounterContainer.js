import React, { Component } from 'react';
import { connect } from 'react-redux';


class CounterComponent extends Component {
  render() {
    const { counter, dispatch } = this.props
    return(
      <div>
        <p>Counter: {counter}</p>
        <button onClick={() => dispatch({ type: 'ADD'})}>Add One</button>
        <button onClick={() => dispatch({ type: 'ADDTEN'})}>Add Ten</button>
        <button onClick={() => dispatch({ type: 'RESET'})}>Reset</button>
        <button onClick={() => dispatch({ type: 'REMOVE'})}>Remove One</button>
        <button onClick={() => dispatch({ type: 'REMOVETEN'})}>Remove Ten</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  counter: state
});

const CounterContainer = connect(mapStateToProps)(CounterComponent)

export default CounterContainer;

