import { useState, useEffect } from "react";
import MealCard from "./MealCard";

function MealForm() {
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const URL = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals))
      .then(setSearch(""));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="gap-4">
        <input
        className="w-40 h-35 gap-5"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar una receta"
      />
      <button className="bg-gray-800 text-white rounded-md mx-auto">
        {" "}
        Buscar{" "}
      </button>
      </div>
      
      <div className="grid grid-cols-4 gap-4">
        {meal.map((mealObj) => (
          <MealCard key={mealObj.idMeal} mealObj={mealObj} />
        ))}
      </div>
    </form>
  );
}

export default MealForm;
