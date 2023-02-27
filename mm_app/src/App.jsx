import { useState } from 'react'
import './App.css'
import {signInGoogle} from './Firebase'

function App() {
  return (
    <div className="App">
      <button onClick={signInGoogle}>Sign in with Google</button>
        <h1>{localStorage.getItem("name")}</h1>
        <h2>{localStorage.getItem("email")}</h2>
    </div>
  )
}

export default App
