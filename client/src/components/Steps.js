import React from "react";
import Step from "./Step";

const Steps = ({ recipe }) => {

    return (recipe.steps.map((step, i) => 
        <div className="steps" key={i}>
            <Step recipe={recipe} i={i}/>
        </div>
        )
    )
}

export default Steps;