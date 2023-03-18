import { useState } from 'react';
import MealList from './components/MealList';
import SearchBar from './components/SearchBar';

function App() {
    const [searchTerm, setSearchTerm] = useState('');
    const [meals, setMeals] = useState([]);

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div className="App">
            <SearchBar meals = {meals} setMeals = {setMeals}/>
            <MealList meals = {meals} setMeals = {setMeals}/>
        </div>
    );
}

export default App;
