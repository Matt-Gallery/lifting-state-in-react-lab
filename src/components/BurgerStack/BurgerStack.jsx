// src/components/BurgerStack/BurgerStack.jsx

const BurgerStack = (props) => {
  return (
    <ul>
      {props.stack.length === 0 ? (
        <li>Burger is empty!</li>
      ) : (
        props.stack.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => props.removeFromBurger(index)}>X</button>
          </li>
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
  