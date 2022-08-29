import React, {Component} from 'react';
import './cardRYM.css';

class CardRYM extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return (
            <div className= 'character-card'>
                <img src={this.props.dataPersonaje.image} alt="" />
                <h4>{this.props.dataPersonaje.name}</h4>
                <p>{`${this.props.dataPersonaje.status} - ${this.props.dataPersonaje.species}`} </p>
                <p className='more' onClick={()=>this.props.remove(this.props.dataPersonaje.id)}>Borrar</p> {/* Aquí onClick necesita retornar la función con el parámetro pero no es necesario pasar el parámentro dentro de los () de la arrow functions. La arrow está para ejecutar el método que ya tiene el dato que necesita como parámetro.  */}
            </div>
        );
    }
}

export default CardRYM