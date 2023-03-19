import { useState } from 'react';
import MealList from './components/MealList';
import SearchBar from './components/SearchBar';

function App() {
    const [meals, setMeals] = useState([]);

    return (
        <div className="App" >
            <SearchBar meals = {meals} setMeals = {setMeals}/>
            <MealList meals = {meals} setMeals = {setMeals}/>
        </div>
    );
}

export default App;
