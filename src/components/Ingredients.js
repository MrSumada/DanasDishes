import React, { useState } from "react";

const Ingredients = ({ recipe }) => {
    
    // const [boxChecked, setBoxChecked] = useState(false);
    
    // function handleChange(e) {
    //     let isChecked = e.target.checked
    //     console.log("checked")
    //     if (e.target.checked) {
    //         setBoxChecked(true);
    //     } else {
    //         setBoxChecked(false);
    //     }
    // }

    return (recipe.ingredients.map((ingredient, i) => 
        <p key={i}>
            <input type="checkbox" id={`step-${i}`} 
            // checked={if (boxChecked) ? true : false} 
            // onChange={e => handleChange(e)}
            ></input>
            <label for={`step-${i}`}><span className="amount">{recipe.ingredients[i].quantity}</span>{recipe.ingredients[i].name}</label>
        </p>
        )
    )
}

export default Ingredients;