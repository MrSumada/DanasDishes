import React, { useState, useEffect } from "react";
import party from 'party-js';

const Step = ({ recipe, i, length, setLength, Tab, SetTab }) => {
    const [boxChecked, setBoxChecked] = useState(false);

    useEffect(()=>{
            setBoxChecked(JSON.parse(localStorage.getItem(`recipe-${recipe._id}-step-${i}`)))
        }
        // , [SetTab]
        )
    
    function handleChange(e) {
        
        if (!boxChecked) {
            // console.log(e.target.id, " checked")
            setBoxChecked(true);
            setLength(++length)
            console.log(length)
            if (length === recipe.ingredients.length+recipe.steps.length) {
                party.sparkles(e.target, {
                    count: party.variation.range(70, 40),
                })
            }
            localStorage.setItem(`recipe-${recipe._id}-step-${i}`, true);
            localStorage.setItem(`recipe-${recipe._id}-length`, length);
        } else {
            // console.log(e.target.id, "unchecked")
            setBoxChecked(false);
            setLength(--length)
            console.log(length)
            localStorage.setItem(`recipe-${recipe._id}-step-${i}`, false);
            localStorage.setItem(`recipe-${recipe._id}-length`, length);
        }
        
    }

    return (
        <div className="step" key={i}>
            <div id={`step-${i}`} 
            className={`checkbox ${boxChecked ? "checked" : ""}`}
            onClick={e => handleChange(e)}
            >
                {recipe.steps[i].step}
            </div>
        </div>
    )
}

export default Step;