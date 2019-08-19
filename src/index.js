import React, {Component} from 'react';
import {render} from 'react-dom';

import Button from './Button';
import './style.scss';

class App extends Component{

    state = {
        counter: 0
    }

    handleClickAdd = () => {
         this.setState({counter: this.state.counter + 1});
    }

    handleClickSubtract = () => {
      this.setState({counter: this.state.counter - 1});
 }

    render(){
        return (
        <React.Fragment>
            <h1 className="title">Olá, mundo - Módulo 1</h1>
            <h2 style={{color: "#F00"}}>{this.state.counter}</h2>
            <Button onClick={this.handleClickSubtract}>Decrementar contador</Button>
            <Button onClick={this.handleClickAdd}>Incrementar contador</Button>
        </React.Fragment>);
    }
}

render(<App />, document.getElementById("app"));
