import React from "react";
import "./MealPopup.css";

function MealPopup(props) {
  const ingredients = [];
  if (props.selectedMeal != null) {
    for (let i = 1; i <= 20; i++) {
      if (props.selectedMeal[`strIngredient${i}`]) {
        ingredients.push({
          name: props.selectedMeal[`strIngredient${i}`],
          measure: props.selectedMeal[`strMeasure${i}`],
        });
      } else {
        break;
      }
    }
  }

  console.log(ingredients);

  const handleClick = () => {
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <div className="header">
          <div className="image-container">
            <img className="image-card" src={props.selectedMeal.strMealThumb} />
          </div>
          <h1 className="title">{props.selectedMeal.strMeal}</h1>
          <button className="close-btn" onClick={handleClick}>
            X
          </button>
        </div>
        <div className="meal-details-ingredients">
          <h3>Ingredients:</h3>
          <ul>
            {ingredients.map((ingredient) => (
              <li key={ingredient.name}>
                <span>{ingredient.name} - {ingredient.measure}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="meal-details-instructions">
          <h3>Instructions:</h3>
          <p>{props.selectedMeal.strInstructions}</p>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
}

export default MealPopup;
