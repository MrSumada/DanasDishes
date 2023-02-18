import React, { useState } from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ recipe }) => {

    return (recipe.ingredients.map((ingredient, i) => 
        <div key={i}>
            <Ingredient recipe={recipe} i={i} />
        </div>
        )
    )
}

export default Ingredients;