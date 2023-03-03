import React from "react";

const Name = ( {recipe} ) => {
    return (
    <div className="recipe-name">
        <h2>{recipe.name}</h2>
        <div className="recipe-info">
            <p><strong>Time:</strong> {recipe.time}</p>
            <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
        </div>
    </div>
        
    )
}

export default Name;