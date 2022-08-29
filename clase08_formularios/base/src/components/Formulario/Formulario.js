import React ,{ Component } from 'react';

class Formulario extends Component {
    constructor(){
        super();
        this.state = {
            valor: ''
        };
    };

    prevenirRecarga(e){
        e.preventDefault();
    };

    guardarCambios(e){
        this.setState({valor: e.target.value});
        console.log(this.state.valor);
    };

    render(){
        return (
            <form onSubmit={(e) => this.prevenirRecarga(e)}>
                <input type='text' onChange={(e) => this.guardarCambios(e)} value={this.state.valor} />
            </form>
        )
    }

};

export default Formulario;