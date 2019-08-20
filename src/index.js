/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { render } from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends Component {
    state = {
      counter: 0,
    }

    handleClickAdd = () => {
      this.setState({ counter: this.state.counter + 1 });
    }

    handleClickSubtract = () => {
      this.setState({ counter: this.state.counter - 1 });
    }

    render() {
      return (
        <>
          <h1 className="title">Olá, mundo - Módulo 1</h1>
          <h2 style={{ color: '#F00' }}>{this.state.counter}</h2>
          <Button onClick={this.handleClickSubtract}>Decrementar contador</Button>
          <Button onClick={this.handleClickAdd}>Incrementar contador</Button>
        </>
      );
    }
}

render(<App />, document.getElementById('app'));
