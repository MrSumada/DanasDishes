import React, { useState } from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ recipe }) => {

    return (recipe.ingredients.map((ingredient, j) => 
        <div key={j}>
            <Ingredient recipe={recipe} j={j} />
        </div>
        )
    )
}

export default Ingredients;