import React, { useState, useEffect } from "react";

const Ingredient = ({ recipe, j }) => {
    const [boxChecked, setBoxChecked] = useState(false);

    useEffect(()=>{
        setBoxChecked(JSON.parse(localStorage.getItem(`recipe-${recipe._id}-ingredient-${j}`)))
        })
    
    function handleChange(e) {
        
        if (!boxChecked) {
            console.log(e.target.id, " checked ")
            setBoxChecked(true);
            localStorage.setItem(`recipe-${recipe._id}-ingredient-${j}`, true);
        } else {
            console.log(e.target.id, "unchecked")
            setBoxChecked(false);
            localStorage.setItem(`recipe-${recipe._id}-ingredient-${j}`, false);
        }   
    }

    return (
        // <div className="ingredient" key={j}>
        //     <input type="checkbox" id={`ingredient-${j}`} 
        //     checked={storedChecked}
        //     value={boxChecked}
        //     onChange={e => handleChange(e)}
        //     ></input>
        //     <label htmlFor={`ingredient-${j}`}><span className="amount">{recipe.ingredients[j].quantity} </span>{recipe.ingredients[j].name}</label>
        // </div>

        <div className="ingredient" key={j}>
            <div id={`ingredient-${j}`} 
            className={`checkbox ${boxChecked ? "checked" : ""}`}
            onClick={e => handleChange(e)}
            >
                <span className="amount">{recipe.ingredients[j].quantity} </span>
                {recipe.ingredients[j].name}
            </div>
            <div></div>
        </div>
    )
}

export default Ingredient;