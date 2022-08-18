import './App.css';
import UserList from './components/UserList/UserList';

function App() {
  let usuarios = ["Carolina", "Thomas", "Bruno"];

  let dia = "4 de Agosto";
  return (
    <div>
      <p>Hoy es {dia}</p>
      <UserList usuarios={usuarios} />
    </div>
  );
}

export default App;
