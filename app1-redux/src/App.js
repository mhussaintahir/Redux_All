import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import store from './reducers'

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className='block'>
          <h1 className='inline'>{store.getState()}</h1>
          <h1 className='inline'>:</h1>
          <h1 className='inline'>{store.getState()}</h1>
          <h1 className='inline'>:</h1>
          <h1 className='inline'>{store.getState()}</h1>
        </div>

        <button onClick={() => { setInterval(() => { store.dispatch({ type: 'START' }) }, 1000) }}>START</button>
        <button onClick={() => { store.dispatch({ type: 'STOP' }) }}>STOP</button>




      </div >
    );
  }
}

export default App;
