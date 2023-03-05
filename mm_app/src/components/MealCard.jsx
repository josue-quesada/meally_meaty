import "./MealCard.css";

function MealCard({ mealObj }) {
  return (
    <div className="cardContainer">
      <div className="imageContainer">
        <img src={mealObj.strMealThumb} width = "50%"/>
      </div>
      <div className="cardContent">
        <div className="mealName">
          <h3>{mealObj.strMeal}</h3>
        </div>
      </div>
    </div>
  );
}

export default MealCard;
