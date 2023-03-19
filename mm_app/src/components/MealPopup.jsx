import React from "react";
import "./MealPopup.css";
import { db } from "../Firebase";
import { collection, getDocs, addDoc } from "@firebase/firestore";
import { useState, useEffect } from "react";

function MealPopup(props) {
  const ingredients = [];
  /**
   * CALIFICACION DE RECETAS
  */

  // Conexion a la DB
  const ratingsCollectionsRef = collection(db, "ratings");
  
  // CREATE vars
  const [newRate, setNewRate] = useState(0);
  let newName = "";

  // READ vars
  let ratingsPromedium=0;
  const [ratings, setRatings] = useState([]);
  let calification = 0;
  var cont = null;
  
  useEffect(() => {
    const getRatings = async () => {
      //obtiene toda la info de la base de datos en un json
      const data = await getDocs(ratingsCollectionsRef);
      //filtra solo la data necesaria (los docs y el id)
      setRatings(data.docs.map((doc) => ({ ...doc.data(), id : doc.id})));
    };
    getRatings();
  }, []);

  // READ ZONE
  if (props.selectedMeal != null){
    ratings.map((rating) => {
      //console.log(pIdMeal, "=", rating.meal_id);
      // si el id coincide suma su calificación y un contador para dividir entre la cantidad
      if(rating.meal_id==props.selectedMeal.idMeal){
        cont +=1;
        //console.log(rating.stars);
        calification += parseInt(rating.stars);
      }
    })
  };

  // CREATE Zone
  const createRate = async () => {
    await addDoc(ratingsCollectionsRef, {meal_id: props.selectedMeal.idMeal, meal_name: newName, stars:newRate});
  };

  //matemática de sumatoriaDeCalificaciones/cantidad
  //calification = calc(rates, checkVisit, calification);
  //console.log(rates);
  //console.log("cantidad->",cont);
  //console.log("sumatoria->",calification);
  //console.log("promedio->",ratingsPromedium);
  ratingsPromedium = (calification/cont).toFixed(1);
 
  
  
  /**
   * FIN CALIFICACION DE RECETAS
   */

  if (props.selectedMeal != null) {
    newName = props.selectedMeal.strMeal;
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
  };

  
  //console.log("id->", props.selectedMeal.idMeal);
  //console.log("calification -> ", ratings);
  console.log(ingredients);
  const handleClick = () => {
    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popup" style={{marginRight: 2 + 'em'}}>
      <div className="popup-inner">
        <div className="head_sup">
          <div className="header">
              <div className="image-container">
                <img className="image-card" src={props.selectedMeal.strMealThumb} />
              </div>
              <h1 className="title">{props.selectedMeal.strMeal}</h1>
              <button className="close-btn" onClick={handleClick}>
                X
              </button>
            </div>
            <div className="calification">
              <h3>Calificación de la receta: {ratingsPromedium.toString()}</h3>  
            </div>
            <div className="rating">
              <input 
                className="in_rate" 
                type="number" 
                min="1" max="5" 
                placeholde="Rate..." 
                onChange={(event) => {setNewRate(event.target.value)}}
              />
              <button className="btn_rate" onClick={createRate}>Calificar</button>
            </div>
            
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
