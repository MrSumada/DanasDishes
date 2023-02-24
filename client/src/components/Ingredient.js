import React, { useState, useEffect } from "react";

const Ingredient = ({ recipe, j }) => {
    
    const storedChecked = JSON.parse(localStorage.getItem(`recipe-${recipe._id}-ingredient-${j}`));
    // const [boxChecked, setBoxChecked] = useState(false);

    useEffect(()=>{
        if (storedChecked === true) {
            console.log("storedChecked: ", storedChecked)
            // setBoxChecked(true)
            
        }
        }, [])
    
    
    
    function handleChange(e) {
        
        if (e.target.checked) {
            console.log(e.target.id, " checked")
            // setBoxChecked(true);
            localStorage.setItem(`recipe-${recipe._id}-ingredient-${j}`, true);
        } else {
            console.log(e.target.id, "unchecked")
            // setBoxChecked(false);
            localStorage.setItem(`recipe-${recipe._id}-ingredient-${j}`, false);
        }   
    }

    return (
        <div className="ingredient" key={j}>
            <input type="checkbox" id={`ingredient-${j}`} 
            checked={storedChecked}
            // value={boxChecked}
            onChange={e => handleChange(e)}
            ></input>
            <label for={`ingredient-${j}`}><span className="amount">{recipe.ingredients[j].quantity} </span>{recipe.ingredients[j].name}</label>
        </div>
    )
}

export default Ingredient;