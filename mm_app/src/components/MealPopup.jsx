import React from "react";

function MealPopup(props) {
  return props.trigger ? (
    <div>
      <h2 className="mealName">{meal.strMeal}</h2>
      <div className="imageContainer">
        <img src={meal.strMealThumb} alt={meal.strMeal} onClick={handleClick} />
      </div>
      {showDetails && (
        <MealDetails
          mealId={meal.idMeal}
          onClose={() => setShowDetails(false)}
        />
      )}
      <div className="cardContent">
        <p>
          {meal.strCategory} - {meal.strArea}
        </p>
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
    </div>
  ) : (
    ""
  );
}

export default MealPopup;
