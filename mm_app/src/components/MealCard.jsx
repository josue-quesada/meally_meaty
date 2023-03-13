import "./MealCard.css";
import { useState } from "react";


function MealCard({ mealObj }) {
  const [expanded, setExpanded] = useState(false);
  const { strMeal, strInstructions, strMealThumb } = mealObj;
  const ingredients = [];
  const measures = [];

  for (let i = 1; i <= 20; i++) {
    if (mealObj[`strIngredient${i}`]) {
      ingredients.push(mealObj[`strIngredient${i}`]);
      measures.push(mealObj[`strMeasure${i}`]);
    } else {
      break;
    }
  }
  
  const RecipeDetails = () => {
    return (
      <div>
        <h2>{strMeal}</h2>
        <img src={strMealThumb} alt={strMeal} />
        <h3>Ingredients:</h3>
        <ul>
          {ingredients.map((ingredient, index) => (
            <li key={index}>
              {ingredient} - {measures[index]}
            </li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <p>{strInstructions}</p>
      </div>
    );
  };

  return (
    <div className="cardContainer" onClick={() => setExpanded(!expanded)}>
      <div className="imageContainer">
        <img src={mealObj.strMealThumb} width = "50%"/>
      </div>
      <div className="cardContent">
        <div className="mealName">
          <h3>{mealObj.strMeal}</h3>
        </div>
      </div>
      {expanded && RecipeDetails()}
    </div>
  );
}

export default MealCard;
