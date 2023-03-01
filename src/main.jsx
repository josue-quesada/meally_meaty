import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { MealContextProvider } from "./context/MealContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MealContextProvider>
      <App />
    </MealContextProvider> 
  </React.StrictMode>
);
