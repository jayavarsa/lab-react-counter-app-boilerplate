import React, { Component } from 'react'
import { useState } from 'react'


export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }
    increment() {
        this.setState({count: this.state.count + 1})
    }
    decrement() {
        this.setState({count :this.state.count - 1})

    }
    creset() {
        this.setState({count :this.state.count = 0})
    }
  render() {
    return (
      <>
      <h2>Counter</h2>
      <p>{this.state.count}</p>
      <button onClick={() => this.increment()}>+</button>
      <button onClick={() => this.decrement()}>-</button>
      <button onClick={() => this.creset()}>Reset</button>

    
      </>
    )
  }
}

export default Counter