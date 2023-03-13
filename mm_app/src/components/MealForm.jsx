import { useState} from "react";
import MealCard from "./MealCard";
import "./MealForm.css";

function MealForm() {
  const [meal, setMeal] = useState([]);
  const [search, setSearch] = useState("");



  const handleSubmit = (e) => {
    e.preventDefault();
    const URL1 = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    const URL2 = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${search}`;
    const URL3 = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${search}`;

    const fetchByName = () => {
      return fetch(URL1)
        .then(response => response.json());
    };

    const fetchByIngredient = () => {
      return fetch(URL2)
        .then(response => response.json());
    };

    const fetchByCountry = () => {
      return fetch(URL3)
        .then(response => response.json());
    };

    Promise.all([fetchByName(), fetchByIngredient(), fetchByCountry()])
    .then(data => {
      if (data[0].meals != null && data[1].meals != null) {
        const array = (data[0].meals).concat((data[1].meals).filter((item2) => !data[0].meals.find((item1) => item1.idMeal === item2.idMeal)))
        setMeal([...array])
      }
      else if (data[0].meals != null && data[1].meals === null && data[2].meals === null) {
        setMeal(...[data[0].meals])
      }
      else if (data[0].meals === null && data[1].meals != null && data[2].meals === null) {
        setMeal(...[data[1].meals])
      }
      else {
        setMeal(...[data[2].meals])
      } 
    })  
    .then(setSearch("")); 
  };
  if (!meal) {
    return <div>No se encontró la receta...</div>;
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
          <MealCard key={mealObj.idMeal} mealObj={mealObj}/>
        ))}
      </div>
    </form>
  );
}

export default MealForm;
