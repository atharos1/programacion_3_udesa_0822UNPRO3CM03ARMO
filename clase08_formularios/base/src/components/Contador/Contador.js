import React, {Component} from 'react';

class Contador extends Component{
    constructor(){
        super();
        this.state = {
            valor: 0,
            mensaje:'',
            color:''
        }
    }

    aumentar(){
        console.log('Estoy aumentado');
        if(this.state.valor >=0){
            this.setState({
                mensaje:''
            })
        }
        this.setState({
            valor: this.state.valor + 1
        })
    }

    decrementar(){
        console.log('Estoy disminuyendo');
        if(this.state.valor <=0){
            this.setState({
                mensaje: 'Ojo vas a nros negativos',
                color: 'red',
            })
        }
        this.setState({
            valor: this.state.valor - 1,
        })
    }
    resetear(){
        this.setState({
            valor: 0,
            mensaje: '',
            color:''
        })
    }

    render(){
        return(
            <section>
                <p>El número es: {this.state.valor}</p>
                <p style={ {color: this.state.color} }>{this.state.mensaje}</p>
                <button onClick={ () => this.decrementar() }> Decrementar </button>
                <button onClick={() => this.aumentar()}> Aumentar </button>
                <button onClick={ () => this.resetear()}>Reset</button>
            </section>
        );
    }


}

export default Contador;