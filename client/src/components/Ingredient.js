import React, { useState, useEffect } from "react";
import party from 'party-js';

const Ingredient = ({ recipe, j, length, setLength  }) => {
    const [boxChecked, setBoxChecked] = useState(false);

    useEffect(()=>{
        setBoxChecked(JSON.parse(localStorage.getItem(`recipe-${recipe._id}-ingredient-${j}`)))
    }, [boxChecked, recipe, j])
    
    function handleChange(e) {
        
        if (!boxChecked) {
            // console.log(e.target.id, " checked ")
            setBoxChecked(true);
            setLength(++length)
            console.log(length)
            if (length === recipe.ingredients.length+recipe.steps.length) {
                party.sparkles(e.target, {
                    count: party.variation.range(70, 40),
                })
            }
            localStorage.setItem(`recipe-${recipe._id}-ingredient-${j}`, true);
            localStorage.setItem(`recipe-${recipe._id}-length`, length);
        } else {
            // console.log(e.target.id, "unchecked")
            setBoxChecked(false);
            setLength(--length)
            console.log(length)
            localStorage.setItem(`recipe-${recipe._id}-ingredient-${j}`, false);
            localStorage.setItem(`recipe-${recipe._id}-length`, length);
        }   
    }

    return (

        <div className="ingredient" key={j}>
            <div id={`ingredient-${j}`} 
            className={`checkbox ${boxChecked ? "checked" : ""}`}
            onClick={e => handleChange(e)}
            >
                <span className="amount">{recipe.ingredients[j].quantity} </span>
                {recipe.ingredients[j].name}
            </div>
        </div>
    )
}

export default Ingredient;