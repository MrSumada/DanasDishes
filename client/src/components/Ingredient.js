import React, { useState, useEffect } from "react";

const Ingredient = ({ recipe, i }) => {
    
    const storedChecked = JSON.parse(localStorage.getItem(`ingredient-${i}`));
    const [boxChecked, setBoxChecked] = useState(false);

    useEffect(()=>{
        if (storedChecked === true) {
            console.log("storedChecked: ", storedChecked)
            setBoxChecked(storedChecked)
        }
        }, [])
    
    
    
    function handleChange(e) {
        let isChecked = e.target.checked
        
        if (e.target.checked) {
            console.log(e.target.id, " checked")
            setBoxChecked(true);
            localStorage.setItem(`ingredient-${i}`, true);
        } else {
            console.log(e.target.id, "unchecked")
            setBoxChecked(false);
            localStorage.setItem(`ingredient-${i}`, false);
        }   
    }

    return (
        <p key={i}>
            <input type="checkbox" id={`ingredient-${i}`} 
            checked={storedChecked}
            onChange={e => handleChange(e)}
            ></input>
            <label for={`ingredient-${i}`}><span className="amount">{recipe.ingredients[i].quantity} </span>{recipe.ingredients[i].name}</label>
        </p>
    )
}

export default Ingredient;