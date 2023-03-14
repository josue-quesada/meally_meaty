import { useState } from 'react';
import MealDetails from './MealDetails';
import "./MealCard.css";

const MealCard = ({ meal }) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setShowDetails(true);
    };

    return (
        <div className="cardContainer">
            <h2 className="mealName">{meal.strMeal}</h2>
            <div className="imageContainer">
                <img className="meal-card-img" src={meal.strMealThumb} alt={meal.strMeal} onClick={handleClick}/>
            </div>
            {showDetails && <MealDetails mealId={meal.idMeal} onClose={() => setShowDetails(false)} />}
            <div className="cardContent">
                <p>{meal.strCategory} - {meal.strArea}</p>
                
            </div>
        </div>
    );
};

export default MealCard;
