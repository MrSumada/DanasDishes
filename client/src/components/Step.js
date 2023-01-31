import React, { useState, useEffect } from "react";

const Step = ({ recipe, i }) => {
    
    const storedStep = JSON.parse(localStorage.getItem(`step-${i}`));
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
            localStorage.setItem(`step-${i}`, true);
        } else {
            console.log(e.target.id, "unchecked")
            setBoxChecked(false);
            localStorage.setItem(`step-${i}`, false);
        }
        
    }

    return (
        <p key={i}>
            <input type="checkbox" id={`step-${i}`} 
            checked={storedStep}
            onChange={e => handleChange(e)}
            ></input>
            <label for={`step-${i}`}>{recipe.steps[i].step}</label>
        </p>
    )
}

export default Step;