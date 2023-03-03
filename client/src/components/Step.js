import React, { useState, useEffect } from "react";

const Step = ({ recipe, i }) => {
    
    const [boxChecked, setBoxChecked] = useState(false);

    useEffect(()=>{
            setBoxChecked(JSON.parse(localStorage.getItem(`recipe-${recipe._id}-step-${i}`)))
        }, [boxChecked, recipe, i])
    
    function handleChange(e) {
        
        if (!boxChecked) {
            // console.log(e.target.id, " checked")
            setBoxChecked(true);
            localStorage.setItem(`recipe-${recipe._id}-step-${i}`, true);
        } else {
            // console.log(e.target.id, "unchecked")
            setBoxChecked(false);
            localStorage.setItem(`recipe-${recipe._id}-step-${i}`, false);
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