import { useState } from 'react';
import MealCard from './MealCard';
import './SearchBar.css';

function SearchBar({meals, setMeals}) {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const URL1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`;
        const URL2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${searchTerm}`;
        const URL3 = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${searchTerm}`;

        Promise.all([fetch(URL1), fetch(URL2), fetch(URL3)])
            .then(responses => Promise.all(responses.map(response => response.json())))
            .then(data => {
                const filteredData = data.filter(d => d.meals !== null);
                if (filteredData.length === 0) {
                    setSearchResults([]);
                } else {
                    const combinedMeals = filteredData.reduce((meals, current) => meals.concat(current.meals), []);
                    const filteredMeals = combinedMeals.filter(
                        (obj, index) =>
                          combinedMeals.findIndex((item) => item.strMeal === obj.strMeal) === index
                      );
                      console.log(filteredMeals);
                    setSearchResults(filteredMeals);
                }
            });

    };

    return (
        <div className="search-bar">
            <h1 className="search-bar-title">Meally Meaty</h1>
            <form onSubmit={handleSubmit} className="search-form">
                <input
                    type="text"
                    placeholder="Nombre, letra, ingrediente.."
                    value={searchTerm}
                    onChange={handleInputChange}
                    className="search-input"
                />
                <button type="submit" className="search-button">Search</button>
            </form>
            {searchResults.length > 0 && (
                <div className="search-results">
                    {setMeals(searchResults)}
                </div>
            )}
        </div>
    );
}

export default SearchBar;
