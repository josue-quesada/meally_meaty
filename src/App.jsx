import MealList from "./components/MealList";

function App() {

  return (
    <div className="bg-zinc-300 h-fit">
      <h1 className="text-2xl font-bold p-6">MealyMeaty App</h1>
      <div className="container mx-auto">
        <MealList />
      </div>
      
    </div>
  );
}

export default App;
