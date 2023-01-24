import React, { useState } from "react";

const Images = ({ recipe }) => {
    
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

    return (
        
        recipe.images.map((image, i) => 
        <div key={i}>
            <img className="picture" src={recipe.images[i].picture} alt={recipe.images[i].alt}/>
        </div>
        )
    )
}

export default Images;