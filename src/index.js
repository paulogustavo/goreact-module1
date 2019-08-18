import React, {Component} from 'react';
import {render} from 'react-dom';

import Button from './Button'

class App extends Component{

    state = {
        counter: 0 
    }

    handleClick = () => {
         this.setState({counter: this.state.counter + 1});
    }

    render(){
        return (
        <React.Fragment>
            <h1>Olá, mundo - Módulo 1</h1>
            <h2>{this.state.counter}</h2>
            <Button onClick={this.handleClick}>Incrementar contador</Button>
        </React.Fragment>);
    }
}

render(<App />, document.getElementById("app"));