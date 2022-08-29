import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Topcard from './components/Topcard/Topcard';
import Lastproduct from './components/Lastproduct/Lastproduct';
import Categories from './components/Categories/Categories';
import Contador from './components/Contador/Contador';
import Characters from './components/Characters/Characters';
import CharactersRYM from './components/CharactersRYM/CharactersRYM'

function App() {
  return (
 
    <div id="wrapper">
      <Sidebar />
      
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          <Topbar />
          
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
            </div>

            {/* <!-- Content Row --> */}
            <div className="row">
              <Topcard title='Products in database' number='135' icon='fa-clipboard-list' color='border-left-primary'/>
              <Topcard title='Título de 2da tarjeta' number='781.141' icon='fa-dollar-sign' color='border-left-success' />
              <Topcard title='Título de 3ra tarjeta' number='9'icon='fa-user-check' color='border-left-warning'/>
            </div>
            {/* <!-- Content Row --> */}
            <div className="row">
              {/* <!-- Last Product in DB --> */}
              <div className="col-lg-6 mb-4">
                <Lastproduct />
              </div>
              <div className="col-lg-6 mb-4">
                <Categories />
              </div>
            </div>
            <Contador />
            {/* Nueva sección para probar un formulario */}
            <h3 className="h3"> Probá insertar un componente formulario debajo de este título</h3>

            {/* Nueva sección Rick and Morty */}
            <h3 className="h3"> Rick and Morty</h3>
            <CharactersRYM />
            {/* Fin nueva sección Rick and Morty */}            
            {/* Nueva sección Personajes */}
            <h3 className="h3"> Personajes de películas</h3>
            <Characters />
            {/* Fin nueva sección Personajes */}
          </div>
        </div>

      </div>

    </div>
 
  );
}

export default App;
