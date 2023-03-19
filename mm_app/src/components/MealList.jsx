import { useState, useEffect } from "react";
import MealCard from "./MealCard";
import "./MealList.css";
import MealPopup from "./MealPopup";

const MealList = ({ meals, setMeals }) => {
  const [loading, setLoading] = useState(true);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [styling, setStyling] = useState(null);
  //crud();
  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );
      const data = await response.json();
      setMeals(data.meals || []);
      setLoading(false);
    }
    
    fetchMeals();
  }, []);

  if (loading) {
    return <div>Loading meals...</div>;
  }

  if (meals.length === 0) {
    return <div>No meals found.</div>;
  }

  return (
    <div className="meal-list" style={styling}>
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          meal={meal}
          setShowPopup={setShowPopup}
          showPopup={showPopup}
          setStyling={setStyling}
          setSelectedMeal={setSelectedMeal}
          styling={styling}
        />
      ))}
      <MealPopup
        trigger={showPopup}
        setTrigger={setShowPopup}
        setStyling={setStyling}
        styling={styling}
        selectedMeal={selectedMeal}
      ></MealPopup>
    </div>
  );
};

export default MealList;
