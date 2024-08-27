import logo from "./logo.svg";
import "./App.css";

function App() {
  const name = "Sofiia";
  const objSrc = {
    name: "Instagram",
    url: "https://www.instagram.com/",
  };
  const arrColour = ["Червоний", "Синій", "Зелений"];
  const number1 = 6;
  const number2 = 3;
  const numberAll = number1 + number2;
  return (
    <div className="App">
      <header className="App-header">
        <p className="zagolovok">Ласкаво просимо до нашого сайту!</p>
        <h1 className="myName">{name}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href={objSrc.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Instagram
        </a>
        <p className="numberAll">{numberAll}</p>
        <ul className="ulColour">
          {arrColour.map((color, index) => (
            <li className="liColour" key={index}>
              {color}
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
