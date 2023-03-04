import {useState} from "react";
import MealList from './MealList'

var urlMeal = "www.themealdb.com/api/json/v1/1/search.php?s=";

function MealForm() {

  const [name, setname] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
    urlMeal = urlMeal+name;
    <MealList url={urlMeal}/>
  };


  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Buscar una receta" 
      onChange={(e) => setname(e.target.value)}/>
      <button className="bg-gray-800 text-white rounded-md">Buscar</button>
    </form>
  );
}

export default MealForm;
