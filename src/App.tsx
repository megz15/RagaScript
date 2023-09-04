import ragaScriptLogo from '/logo.png'
import './App.css'
import './components/components.css'
import { Notes } from './components/Notes'
import { specificNote } from './types'

function App() {

  const notes: specificNote[] = ["S", "r", "R", "g", "G", "m", "M", "P", "D", "N", "S", "r", "R", "g", "G", "m"];

  return (
    <>
      <div>
        <a href="https://solidjs.com" target="_blank">
          <img src={ragaScriptLogo} class="logo" alt="RagaScript logo" />
        </a>
      </div>
      <h1>RagaScript</h1>
      
      <Notes notes={notes} />

      <p class="subtitle">
        popipopipo
      </p>
    </>
  )
}

export default App
