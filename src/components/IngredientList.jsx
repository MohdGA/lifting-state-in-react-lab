import { useState } from "react";

const IngredientList = (props) => {

  return (

    <> 
    <ul>
    {props.availableIngredients.map((food, index) => 
      <li key={index} style={{ backgroundColor: food.color }}>  
        {food.name}
        <button onClick={() => props.addToBurger(food)}>+</button>
      </li>
        
    )}
  </ul>
      
  </>
  )
};

export default IngredientList;