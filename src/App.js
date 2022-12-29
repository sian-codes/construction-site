import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { thin } from '@fortawesome/fontawesome-svg-core/import.macro'

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <div className="fade-in">
          <h1>Site Under Construction</h1>
          <div className="buttons">
              <a className="btn-contact" href="mailto:sian@siancodes.com" onClick={() => window.location.href = 'mailto:sian@siancodes.com'}><FontAwesomeIcon icon={thin('envelope')}/> Contact Me</a>
              <a className="coffee" href="https://siancodes.com"><FontAwesomeIcon icon={thin("cup-togo")} /></a>
              <a className="btn-link" href="https://github.com/sian-codes">GitHub <FontAwesomeIcon icon={thin("code")}/></a>
          </div>
    </div>
      </header>
    </div>
  );
}

export default App;
