import { useState, useEffect } from 'react';
import MealCard from './MealCard';
import "./MealList.css";

const MealList = ({meals, setMeals}) => {
    const [loading, setLoading] = useState(true);
    const [selectedMeal, setSelectedMeal] = useState(null);

    useEffect(() => {
        async function fetchMeals() {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
            const data = await response.json();
            setMeals(data.meals || []);
            setLoading(false);
        }

        fetchMeals();
    }, []);

    const handleMealClick = (meal) => {
        setSelectedMeal(meal);
    };

    if (loading) {
        return <div>Loading meals...</div>;
    }

    if (meals.length === 0) {
        return <div>No meals found.</div>;
    }

    return (
        <div className="meal-list">
            {meals.map((meal) => (
                <MealCard key={meal.idMeal} meal={meal} onClick={() => handleMealClick(meal)} />
            ))}
        </div>
    );
};

export default MealList;
