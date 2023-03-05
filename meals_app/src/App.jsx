import MealList from "./components/MealList";
import MealForm from './components/MealForm';
import { useState, useEffect } from "react";

function App() {
  
  return (
    <div className="bg-zinc-300 h-fit">
      <h1 className="text-2xl font-bold p-6">MealyMeaty App</h1>
      <div className="container mx-auto p-5"> 
        <MealForm/>
      </div>
    </div>
  );
}

export default App;
