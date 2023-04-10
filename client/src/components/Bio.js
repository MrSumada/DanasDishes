import React from "react";

const Bio = ({ recipe, setPage, setCurrentAuthorId }) => {

    let clickable = false;
    if (recipe.author.id >= 0) { clickable = true}

    const routeRecipeList = () => { 
        if (clickable) {
            setPage("RecipeList");
            setCurrentAuthorId(recipe.author.id);
            // console.log("Click")
        }
    }

    return (
        <div>By <span id="bio-name" className={`${clickable ? "clickable" : ""}`} onClick={routeRecipeList}>{recipe.author.name}</span></div>
    )
}

export default Bio;