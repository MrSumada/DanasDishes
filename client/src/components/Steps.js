import React, { useState } from "react";
import Step from "./Step";

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
            <Step recipe={recipe} i={i}/>
        </p>
        )
    )
}

export default Steps;