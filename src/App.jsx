import { useState } from "react";
import "./App.css";
import IngredientList from "./components/IngredientList/IngredientList";
import BurgerStack from "./components/BurgerStack/BurgerStack";

const App = () => {
  const availableIngredients = [
    { name: 'Kaiser Bun', color: 'saddlebrown' },
    { name: 'Sesame Bun', color: 'sandybrown' },
    { name: 'Gluten Free Bun', color: 'peru' },
    { name: 'Lettuce Wrap', color: 'olivedrab' },
    { name: 'Beef Patty', color: '#3F250B' },
    { name: 'Soy Patty', color: '#3F250B' },
    { name: 'Black Bean Patty', color: '#3F250B' },
    { name: 'Chicken Patty', color: 'burlywood' },
    { name: 'Lettuce', color: 'lawngreen' },
    { name: 'Tomato', color: 'tomato' },
    { name: 'Bacon', color: 'maroon' },
    { name: 'Onion', color: 'lightyellow' },
    { name: 'Cheddar Cheese', color: '#FDE18B' },
    { name: 'Swiss Cheese', color: '#F1E1A8' },
  ];

  // Initialize stack state
  const [stack, setStack] = useState([]);

  // Function to add an ingredient to the burger stack
  const addToBurger = (ingredient) => {
    setStack([...stack, ingredient]);
  };

  // Function to remove an ingredient from the burger stack
  const removeFromBurger = (index) => {
    setStack(stack.filter((_, i) => i !== index));
  };

  return (
    <main>
      <h1>Burger Stacker</h1>
      <section>
        <div className="ingredients-container">
          <h2>Available Ingredients</h2>
          <IngredientList ingredients={availableIngredients} addToBurger={addToBurger} />
        </div>
        <div className="burger-container">
          <h2>Your Burger</h2>
          <BurgerStack stack={stack} removeFromBurger={removeFromBurger} />
        </div>
      </section>
    </main>
  );
};

export default App;