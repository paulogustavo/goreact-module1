import React, {Component} from 'react';
import {render} from 'react-dom';

class Button extends Component{
    render(){
        return <button>Clica aqui</button>
    }
}

class App extends Component{
    render(){
        return (
        <React.Fragment>
            <h1>Olá, mundo - Módulo 1</h1>
            <Button />
        </React.Fragment>);
    }
}

render(<App />, document.getElementById("app"));