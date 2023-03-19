import { useState } from 'react';
import MealPopup from './MealPopup';
import "./MealCard.css";

const MealCard = ({ meal, setShowPopup, showPopup, setStyling, styling, setSelectedMeal}) => {
   

    const handleClick = () => {
        setSelectedMeal(meal)
        setShowPopup(!showPopup)
        if(styling === null){
             setStyling({ position: "fixed" });
         }else{
            setStyling(null)
         }
    };

    return (
        <div className="cardContainer">
            <h2 className="mealName">{meal.strMeal}</h2>
            <div className="imageContainer">
                <img className="meal-card-img" src={meal.strMealThumb} alt={meal.strMeal} />
            </div>
            <div className="cardContent">
                <p>{meal.strCategory} - {meal.strArea}</p>
                <button className='info-btn' onClick={handleClick}>Info</button>
            </div>
        </div>
    );
};

export default MealCard;
