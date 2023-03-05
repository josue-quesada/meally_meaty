import { useState } from 'react'
import MealForm from '../../meals_app/src/components/MealForm'
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
