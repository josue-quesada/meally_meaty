import { useState, useEffect } from 'react';

const MealDetails = ({ mealId, onClick }) => {
    const [meal, setMeal] = useState({});
    const [loading, setLoading] = useState(true);
    const [showDetails, setShowDetails] = useState(true);

    useEffect(() => {
        async function fetchMeal() {
            if (mealId) {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
                const data = await response.json();
                setMeal(data.meals[0]);
                setLoading(false);
            }
        }

        fetchMeal();
    }, [mealId]);

    if (loading) {
        return <div>Loading meal...</div>;
    }

    const ingredients = [];
    for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
            ingredients.push({
                name: meal[`strIngredient${i}`],
                measure: meal[`strMeasure${i}`]
            });
        } else {
            break;
        }
    }

    const handleOnClick = () => {
        setShowDetails(!showDetails);
        onClick && onClick();
    };

    return (
        <div className="meal-details-container" onClick={handleOnClick}>
            {showDetails && (
                <div>
                    <div className="meal-details-ingredients">
                        <h3>Ingredients:</h3>
                        <ul>
                            {ingredients.map((ingredient) => (
                                <li key={ingredient.name}>
                                    <span>{ingredient.name}</span>
                                    <span>{ingredient.measure}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="meal-details-instructions">
                        <h3>Instructions:</h3>
                        <p>{meal.strInstructions}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MealDetails;


