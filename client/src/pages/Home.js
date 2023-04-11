import Header from "../components/Header";
import Recipe from "./Recipe";
import Upload from "./Upload";
import Login from "./Login";
import Footer from "../components/Footer";
import React, { useState, useEffect } from "react";
import data from "../recipes";
import RecipeList from "./RecipeList";
import { set } from "mongoose";

const Home = () => {

  const [Tab, setTab ] = useState("Ingredients");
  const [LoggedIn, setLoggedIn] = useState(false);
  const [Page, setPage] = useState("Home");
  const [RecipeNum, setRecipeNum] = useState(0);
  const [currentAuthorId, setCurrentAuthorId] = useState(0);

  let storedRecipe = localStorage.getItem(`Recipe`) || 0; 

  useEffect(() => {
    if (storedRecipe) {
      setRecipeNum(storedRecipe);
    }
  }, [])
    
  let recipe = data.recipes.sort((a, b) => a.id - b.id)[RecipeNum]

  return (
    <div className={`App ${Page === "Home" ? "recipe" : ""}`}>
      <Header 
        recipes={data.recipes} 
        RecipeNum={RecipeNum}  
        setRecipeNum={setRecipeNum} 
        Page={Page} 
        setPage={setPage}
        Tab={Tab}
        setTab={setTab}
        LoggedIn={LoggedIn}
        setLoggedIn={setLoggedIn}
        setCurrentAuthorId={setCurrentAuthorId}
      />
      {Page === "Upload" ? (<Upload />) : ("")}
      {Page === "Home" ? (<Recipe 
        recipe={recipe}
        RecipeNum={RecipeNum}
        Tab={Tab}
        setTab={setTab}
        setPage={setPage}
        setCurrentAuthorId={setCurrentAuthorId}
      />) : ("")}
      {Page === "Login" ? (<Login 
        Page={Page}
        setPage={setPage}
        LoggedIn={LoggedIn}
        setLoggedIn={setLoggedIn}
      />) : ("")}
      {Page === "RecipeList" ? (<RecipeList 
        recipes={data.recipes} 
        Page={Page}
        setPage={setPage}
        LoggedIn={LoggedIn}
        setLoggedIn={setLoggedIn}
        author={currentAuthorId}
        setCurrentAuthorId={setCurrentAuthorId}
        setRecipeNum={setRecipeNum}
      />) : ("")}
      {Page === "Upload" || Page === "RecipeList" ? (<Footer page={"blue"}/>) : (<Footer page={"default"}/>)}
    </div>
  )
}


export default Home;