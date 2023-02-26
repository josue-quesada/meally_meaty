import { useState } from 'react'
import './App.css'
import {signInGoogle} from './Firebase'

function App() {
  return (
    <div className="App">
      <button onClick={signInGoogle}>Sign in with Google</button>
    </div>
  )
}

export default App
