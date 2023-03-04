import MealList from "./components/MealList";
import MealForm from './components/MealForm';

const url1 = "https://www.themealdb.com/api/json/v1/1/search.php?f="

function App() {

  return (
    <div className="bg-zinc-300 h-fit">
      <h1 className="text-2xl font-bold p-6">MealyMeaty App</h1>
      <div className="container mx-auto p-5"> 
        <MealForm/>
      </div>
      {/* <div className="container mx-auto">
        <MealList url = {url1+"r"}/>
      </div>  */}
      
    </div>
  );
}

export default App;
