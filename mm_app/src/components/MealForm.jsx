import { useState} from "react";
import MealCard from "./MealCard";
import "./MealForm.css";

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
  if (!meal) {
    return <div>Cargando...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Buscar una receta"
      />
      <button>
        {" "}
        Buscar{" "}
      </button>
      </div>
      
      <div className="mealContainer">
        {meal.map((mealObj) => (
          <MealCard mealObj={mealObj}/>
        ))}
      </div>
    </form>
  );
}

export default MealForm;
