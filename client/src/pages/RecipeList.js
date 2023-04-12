import { useEffect, useState } from "react"
import data from "../recipes.js"

const RecipeList = ({ recipe, author, setPage, RecipeNum, setRecipeNum }) => {

    const [changeRecipe, setChangeRecipe] = useState(false)
    const authorName = data.users.filter(user => author === user.id)
    const sortedRecipes = data.recipes.filter(recipe => author === recipe.author.id )
    const routeRecipe = (e) => {
        setPage("Home");
        setRecipeNum(e.target.getAttribute("data-recipe"));
        setChangeRecipe(true)
        // console.log("No useEffect: ", RecipeNum)
    }

    useEffect(() => {
        if (changeRecipe) {
            setPage("Home")
            setChangeRecipe(false)
        }
      }, [RecipeNum])

    return (
        <div id="recipe-list">
            <h2>Recipes by {authorName[0].name}</h2>
            {sortedRecipes.map((recipe, i) => 
                <div className="recipe-list-item" key={i} onClick={routeRecipe} data-recipe={recipe._id}>
                    {recipe.name}
                </div>
            )}
        </div>
    )
}

export default RecipeList;