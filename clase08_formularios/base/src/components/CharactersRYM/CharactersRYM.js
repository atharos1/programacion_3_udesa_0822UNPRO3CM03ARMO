import React, {Component} from 'react';
import CardRYM from '../CardRYM/CardRYM'
import Formulario from '../Formulario/Formulario';

class CharactersRYM extends Component{
    constructor(){
        super();
        this.state = {
            isLoaded:false,
            personajes:[],
            nexturl:'',  //Para tener la página siguiente.
        }
    }
    componentDidMount(){
        console.log("Me monté");
        let url = 'https://rickandmortyapi.com/api/character';

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    isLoaded: true,
                    personajes: data.results,
                    nextUrl: data.info.next, //Para tener la página siguiente.
                })
            })
            .catch( function (e){
                console.log(e);
            })
    }

    addMore(){
        let url = this.state.nextUrl;

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    personajes: this.state.personajes.concat(data.results),
                    nextUrl: data.info.next,  //Para tener la página siguiente.
                })
            })
            .catch( function (e){
                console.log(e);
            })
    }
    
    deleteCard(personajeABorrar){
        let personajesQueQuedan = this.state.personajes.filter( personaje => personaje.id !== personajeABorrar);
        this.setState({
            personajes: personajesQueQuedan
        })
    }

    render(){
        return(
            <React.Fragment>
                <div className="row card-filter">
                    <Formulario />
                    {/* Aquí colocá un componente con un formulario que permita filtrar las tarjetas en base a los que escriba el usuario */}
                </div>                
                <div className="row card-container">                
                    { 
                        this.state.isLoaded === false ?
                        <p>Cargando...</p> :
                        this.state.personajes.map((personaje, idx)=><CardRYM key={personaje.name + idx} dataPersonaje={personaje} remove={(personajeABorrar)=>this.deleteCard(personajeABorrar)}/>) 
                        //La arrow function, para borrar, necesita saber a quién borrar por eso debemos pasar los parámetros.
                    }
                </div>
                <button onClick={()=>this.addMore()}> Más personajes</button>
            </React.Fragment>
        )
        //Opcional hacer un if tradicional que retorne <p>Cargando...</p> y el else retrona la estrucurta tradicional retrun(....)
    }
}

export default CharactersRYM;