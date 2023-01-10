import React, { useState } from "react";

const Name = (prop) => {
    
    const [recipeName, setRecipeName] = useState("Deep-Dish Apple Pie")

    return (
        <h2>{recipeName}</h2>
    )
}

export default Name;