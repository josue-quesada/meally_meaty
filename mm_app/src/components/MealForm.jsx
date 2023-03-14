import { useState } from "react";

function MealForm(mealObjt) {
    const [mealName, setMealName] = useState("");
    const [mealImage, setMealImage] = useState("");
    const [ingredients, setIngredients] = useState([""]);
    const [measures, setMeasures] = useState([""]);
    const [instructions, setInstructions] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const mealData = {
            mealName,
            mealImage,
            ingredients,
            measures,
            instructions,
        };
        mealObjt.onSubmit(mealData);
        setMealName("");
        setMealImage("");
        setIngredients([""]);
        setMeasures([""]);
        setInstructions("");
    };

    const handleIngredientChange = (index, event) => {
        const newIngredients = [...ingredients];
        newIngredients[index] = event.target.value;
        setIngredients(newIngredients);
    };

    const handleMeasureChange = (index, event) => {
        const newMeasures = [...measures];
        newMeasures[index] = event.target.value;
        setMeasures(newMeasures);
    };

    const handleAddIngredient = () => {
        setIngredients([...ingredients, ""]);
        setMeasures([...measures, ""]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="mealName">Meal Name:</label>
                <input
                    type="text"
                    id="mealName"
                    value={mealName}
                    onChange={(event) => setMealName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="mealImage">Meal Image:</label>
                <input
                    type="text"
                    id="mealImage"
                    value={mealImage}
                    onChange={(event) => setMealImage(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="ingredients">Ingredients:</label>
                <ul>
                    {ingredients.map((ingredient, index) => (
                        <li key={index}>
                            <input
                                type="text"
                                value={ingredient}
                                onChange={(event) => handleIngredientChange(index, event)}
                            />
                            <input
                                type="text"
                                value={measures[index]}
                                onChange={(event) => handleMeasureChange(index, event)}
                            />
                        </li>
                    ))}
                </ul>
                <button type="button" onClick={handleAddIngredient}>
                    Add Ingredient
                </button>
            </div>
            <div>
                <label htmlFor="instructions">Instructions:</label>
                <textarea
                    id="instructions"
                    value={instructions}
                    onChange={(event) => setInstructions(event.target.value)}
                ></textarea>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default MealForm;

