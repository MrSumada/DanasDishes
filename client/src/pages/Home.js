import Header from "../components/Header";
import Recipe from "./Recipe";
import Upload from "./Upload";
import Login from "./Login";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import recipes from "../recipes";

const Home = () => {

  const [Tab, setTab ] = useState("Ingredients");
  const [LoggedIn, setLoggedIn] = useState(false);
  const [Page, setPage] = useState("Home");
  const [RecipeNum, setRecipeNum] = useState(0);

  let storedRecipe = localStorage.getItem(`Recipe`) || 0; 

  useEffect(() => {
    if (storedRecipe) {
      setRecipeNum(storedRecipe);
    }
  }, [])
    
  let recipe = recipes[RecipeNum]

  return (
    <div className={`App ${Page === "Home" ? "recipe" : ""}`}>
      <Header 
        recipes={recipes} 
        RecipeNum={RecipeNum}  
        setRecipeNum={setRecipeNum} 
        Page={Page} 
        setPage={setPage}
        Tab={Tab}
        setTab={setTab}
        LoggedIn={LoggedIn}
        setLoggedIn={setLoggedIn}
      />
      {Page === "Upload" ? (<Upload />) : ("")}
      {Page === "Home" ? (<Recipe 
        recipe={recipe}
        RecipeNum={RecipeNum}
        Tab={Tab}
        setTab={setTab}
      />) : ("")}
      {Page === "Login" ? (<Login 
        Page={Page}
        setPage={setPage}
        LoggedIn={LoggedIn}
        setLoggedIn={setLoggedIn}
      />) : ("")}
      {Page === "Upload" ? (<Footer page={"upload"}/>) : (<Footer page={"default"}/>)}
    </div>
  )
}


export default Home;