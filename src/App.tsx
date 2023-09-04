import ragaScriptLogo from '/logo_2.png'
import './App.css'
import './components/components.css'
import { Notes } from './components/Notes'
import { specificNote } from './types'
import { ControlPanel } from './components/ControlPanel'

function App() {

  const notes: specificNote[] = [
    // "S", "r", "R", "g", "G", "m", "M", "P", "D", "N", "S", "r", "R", "g", "G", "m",
    // "S", "r", "R", "g", "G", "m", "M", "P", "D", "N", "S", "r", "R", "g", "G", "m",
    // "S", "r", "R", "g", "G", "m", "M", "P", "D", "N", "S", "r", "R", "g", "G", "m",
  ];
  
  const taal: number[] = [4,8,12,17];

  return (
    <>
      <div class="head">
        <div class="title">
          <img src={ragaScriptLogo} class="logo" alt="RagaScript logo" />
          <h1>RagaScript</h1>
        </div>

        <ControlPanel />
      </div>

      <button>Add Row</button>
      
      <Notes notes={notes} taal={taal}/>
    </>
  )
}

export default App
