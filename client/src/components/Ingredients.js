import React from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ recipe, length, setLength }) => {

    return (recipe.ingredients.map((ingredient, j) => 
        <div key={j}>
            <Ingredient 
                recipe={recipe} 
                j={j}
                length={length}
                setLength={setLength}
            />
        </div>
        )
    )
}

export default Ingredients;