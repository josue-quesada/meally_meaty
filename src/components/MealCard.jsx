
function MealCard({ mealObj }) {
  return (
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className=" text-xl font-bold mb-4">{mealObj.strMeal}</h1>
      <img src={mealObj.strMealThumb} />
    </div>
  );
}

export default MealCard;
