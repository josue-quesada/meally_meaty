import React, { useContext, useState, useEffect } from "react";
import MealCard from "./MealCard";
import { MealContext } from "../context/MealContext";


function MealList({url}) {
  const [meal, setMeal] = useState([]);
  const fetchData = () => {
    return fetch(url)
      .then((response) => response.json())
      .then((data) => setMeal(data.meals));
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (meal == null) {
    return <div className="text-white text-center text-xl font-bold mt-10 h-screen">No hay recetas con esta letra</div>;
  }

  return (
    <div className="grid grid-cols-4 gap-4">
      {meal.map((mealObj) => (
        <MealCard key={mealObj.idMeal} mealObj={mealObj} />
      ))}
    </div>
  );
}

export default MealList;
