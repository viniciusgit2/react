import logo from './logo.svg';
import './App.css';
import Primeiro from './componentes/Primeiro';
import Segundo from './componentes/Segundo';
import Frag from './componentes/Frag';
import Aleatotio from './componentes/Aleatorio';
import Card from './componentes/Card';
function App() {
  return (
    <>
    <Card></Card>
    <Aleatotio></Aleatotio>
    <Frag></Frag>
    <Primeiro></Primeiro>
    <Segundo></Segundo>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div></>
  );
}

export default App;
