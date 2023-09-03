import solidLogo from './assets/solid.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Notes } from './components/Notes'
import { specificNote } from './types'

function App() {

  const notes: specificNote[] = ["S", "R", "g", "M", "P", "D", "n"];

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://solidjs.com" target="_blank">
          <img src={solidLogo} class="logo solid" alt="Solid logo" />
        </a>
      </div>
      <h1>RagaScript</h1>
      
      <Notes notes={notes} />

      <p class="read-the-docs">
        Click on the Vite and Solid logos to learn more
      </p>
    </>
  )
}

export default App
