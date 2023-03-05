import { useState } from 'react'
import MealForm from './components/MealForm'
import './App.css'
import {signInGoogle} from './Firebase'


/*
*/
function App() {
  return (
    <div className="App">

      <MealForm/>
      
    </div>
  )
}

export default App
