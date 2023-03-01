import { createContext, useState, useEffect } from "react";

export const MealContext = createContext();

export function MealContextProvider(props) {
  const [meal, setMeal] = useState([]);
  const fetchData = () => {
    return fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((response) => response.json())
      .then((data) => setMeal(data.meals));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <MealContext.Provider value={{ meal }}>
      {props.children}
    </MealContext.Provider>
  );
}
