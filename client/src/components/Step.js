import React, { useState, useEffect } from "react";

const Step = ({ recipe, i }) => {
    
    const storedStep = JSON.parse(localStorage.getItem(`recipe-${recipe._id}-step-${i}`));
    const [boxChecked, setBoxChecked] = useState(false);

    useEffect(()=>{
        if (storedStep === true) {
            console.log("storedStep: ", storedStep)
            setBoxChecked(storedStep)
        }
        }, [])
    
    
    
    function handleChange(e) {
        let isChecked = e.target.checked
        
        if (e.target.checked) {
            console.log(e.target.id, " checked")
            setBoxChecked(true);
            localStorage.setItem(`recipe-${recipe._id}-step-${i}`, true);
        } else {
            console.log(e.target.id, "unchecked")
            setBoxChecked(false);
            localStorage.setItem(`recipe-${recipe._id}-step-${i}`, false);
        }
        
    }

    return (
        <div className="step" key={i}>
            <input type="checkbox" id={`step-${i}`} 
            checked={boxChecked}
            onChange={e => handleChange(e)}
            ></input>
            <label for={`step-${i}`}>{recipe.steps[i].step}</label>
        </div>
    )
}

export default Step;