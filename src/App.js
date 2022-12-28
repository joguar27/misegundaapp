import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hola Jorge!!!</h1>
        <h2>Soy mi segunda App en React!!!</h2>
        <p>Aloha!!!</p>
        <p>
          <code>Jorge Arruda | misegundaapp</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendiendo React Js
        </a>
      </header>
    </div>
  );
}

export default App;
