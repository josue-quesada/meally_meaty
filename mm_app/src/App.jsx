import { useState } from 'react';
import MealList from './components/MealList';
import SearchBar from './components/SearchBar';
import "./App.css"

function App() {
    const [meals, setMeals] = useState([]);

    return (
        <div className="app" >
            <SearchBar meals = {meals} setMeals = {setMeals}/>
            <MealList meals = {meals} setMeals = {setMeals}/>
        </div>
    );
}

export default App;
