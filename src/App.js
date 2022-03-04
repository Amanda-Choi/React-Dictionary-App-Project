import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        Coded by {""}
        <a
          href="https://github.com/Amanda-Choi/Simple-Dictionary-App"
          target="_blank"
          rel="noopener noreferrer"
        >
          Amanda Choi
        </a>
      </footer>
    </div>
  );
}
