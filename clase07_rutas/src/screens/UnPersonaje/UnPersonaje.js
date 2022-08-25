import React from 'react';

// 1) Transformar el componente en un componente de clase.
// 2) Pedir datos al endpoint de 1 personaje dentro de componentDidMount().
// 3) Renderizar los datos de 1 personaje dentro del return.

function UnPersonaje (){

    return(
        <React.Fragment>
            <h2>Datos del personaje....</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt perspiciatis voluptate consequuntur suscipit dicta totam iste recusandae odit voluptas, eaque soluta. Aliquid impedit voluptas distinctio, reprehenderit soluta nostrum fugit atque!</p>
        </React.Fragment>
    )

}

export default UnPersonaje;