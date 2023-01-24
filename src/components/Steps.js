import React, { useState } from "react";

const Steps = ({ recipe }) => {
    
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

    return (recipe.steps.map((step, i) => 
        <p key={i}>
            <input type="checkbox" id={`step-${i}`} 
            // checked={if (boxChecked) ? true : false} 
            // onChange={e => handleChange(e)}
            ></input>
            <label for={`step-${i}`}>{recipe.steps[i].step}</label>
        </p>
        )
    )
}

export default Steps;