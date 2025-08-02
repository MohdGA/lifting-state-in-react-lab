import { useState } from "react";

const BurgerStack = (props) => {

  return( 
  <ul>
     {props.stack.map(
      (ingredient, idx) =>(<li key={idx} style={{ backgroundColor: ingredient.color }}>
                {ingredient.name}
              </li>))}
  </ul>
  )
};

export default BurgerStack;