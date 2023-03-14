import { useState } from 'react';
import MealList from './components/MealList';
import SearchBar from './components/SearchBar';

function App() {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (searchTerm) => {
        setSearchTerm(searchTerm);
    };

    return (
        <div className="App">
            <SearchBar onSearch={handleSearch} />
            <MealList searchTerm={searchTerm} />
        </div>
    );
}

export default App;
