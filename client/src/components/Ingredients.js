import React, { useState } from "react";
import Ingredient from "./Ingredient";

const Ingredients = ({ recipe }) => {

    return (recipe.ingredients.map((ingredient, i) => 
        <p key={i}>
            <Ingredient recipe={recipe} i={i} />
        </p>
        )
    )
}

export default Ingredients;