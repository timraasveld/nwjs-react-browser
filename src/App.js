import React, { Component } from 'react'
import style from './App.css'
import Browser from './Browser'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Browser homePage="https://github.com" />
      </div>
    )
  }
}

export default App
