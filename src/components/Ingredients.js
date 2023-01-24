import React, { useState } from "react";

const Ingredients = ({ recipe }) => {
    
    const [boxChecked, setBoxChecked] = useState(false);
    
    function handleChange(e) {
        let isChecked = e.target.checked
        
        if (e.target.checked) {
            console.log(e.target.id, " checked")
            setBoxChecked(true);
        } else {
            console.log(e.target.id, "unchecked")
            setBoxChecked(false);
        }
    }

    return (recipe.ingredients.map((ingredient, i) => 
        <p key={i}>
            <input type="checkbox" id={`ingredient-${i}`} 
            // checked={if (boxChecked) ? true : false} 
            onChange={e => handleChange(e)}
            ></input>
            <label for={`ingredient-${i}`}><span className="amount">{recipe.ingredients[i].quantity}</span>{recipe.ingredients[i].name}</label>
        </p>
        )
    )
}

export default Ingredients;