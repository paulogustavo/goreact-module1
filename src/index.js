import React, {Component} from 'react';
import {render} from 'react-dom';
import PropTypes from 'prop-types'

class Button extends Component{
    render(){
        return <button onClick={this.props.onClick}>{this.props.children}</button>
    }
}

Button.defaultProps = {
    children: "Salvar"
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
}

class App extends Component{
    handleClick(){
         alert("Botão clicado!");
    }

    render(){
        return (
        <React.Fragment>
            <h1>Olá, mundo - Módulo 1</h1>
            <Button onClick={() => alert("Clicou no primeiro botão!")} />
            <Button onClick={this.handleClick}>Enviar agora</Button>
        </React.Fragment>);
    }
}

render(<App />, document.getElementById("app"));