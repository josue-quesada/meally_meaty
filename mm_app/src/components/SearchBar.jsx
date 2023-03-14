import { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    return (
        <form onSubmit={handleSubmit} className="search-bar">
            <h1 className="search-bar-title">Meally Meaty</h1>
            <input
                type="text"
                placeholder="Nombre, letra, ingrediente.."
                value={searchTerm}
                onChange={handleInputChange}
                className="search-bar__input"
            />
            <button type="submit" className="search-bar__button">Search</button>
        </form>
    );
}

export default SearchBar;

