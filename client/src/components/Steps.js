import React from "react";
import Step from "./Step";

const Steps = ({ recipe,length, setLength }) => {

    return (recipe.steps.map((step, i) => 
        <div className="steps" key={i}>
            <Step 
                recipe={recipe} 
                i={i}
                length={length}
                setLength={setLength}
            />
        </div>
        )
    )
}

export default Steps;