import React, { useState } from "react";

const Ingredient = (prop) => {
    
    const [boxChecked, setBoxChecked] = useState(false);
    
    function handleChange(e) {
        let isChecked = e.target.checked
        console.log("checked")
        if (e.target.checked) {
            setBoxChecked(true);
        } else {
            setBoxChecked(false);
        }
    }

    return (
        <p>
            <input type="checkbox" name="step-1" 
            // checked={if (boxChecked) ? true : false} 
            onChange={e => handleChange(e)}
            ></input>
            <label for="step-1"><span className="amount">2 to 2 ½ c.</span> sugar (depending on tartness of apples)</label>
        </p>
    )
}

export default Ingredient;