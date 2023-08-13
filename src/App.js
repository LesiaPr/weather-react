import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Kyiv" />
      <p className="mt-2">
        <a
          href="https://github.com/LesiaPr/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        , by Lesia Pr.
      </p>
    </div>
  );
}

export default App;
