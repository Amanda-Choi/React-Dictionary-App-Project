import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>English Dictionary</h1>
        </header>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          Open sourced on Github by {""}
          <a
            href="https://github.com/Amanda-Choi/Simple-Dictionary-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Amanda Choi
          </a>
        </footer>
      </div>
    </div>
  );
}
