import React from "react";

const Images = ({ recipe }) => {

    return (
        
        recipe.images.map((image, i) => 
        <div key={i}>
            <img className="picture" src={recipe.images[i].picture} alt={recipe.images[i].alt}/>
        </div>
        )
    )
}

export default Images;