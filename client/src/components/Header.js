import React, { useEffect, useState } from "react";

const Header = ({ recipes, RecipeNum, setRecipeNum, Page, setPage }) => {
    
    const [Modal, setModal] = useState(false);
    const [ModalRecipe, setModalRecipe] = useState("");

    const toggleModal = () => {
        setModal(Modal => !Modal)
    }
    const toggleUpload = () => {
        if (Page === "Home") { setPage("Upload") }
        if (Page === "Upload") { setPage("Home") }
    }

    const changeRecipe = (e) => {
        setModalRecipe(e.target.value)
        setRecipeNum(e.target.value)
        localStorage.clear();
    }

    useEffect(() => {
        setModal(false)
    }, [ModalRecipe])

    return (
        <header>
            <div id="page-header">
                <h1>Dana's <span>Dishes</span></h1>
                <div id="selector" onClick={toggleModal}></div>
                {Page === "Home" ? <div id="upload-toggle" onClick={toggleUpload}>Upload</div>
                : <div id="upload-toggle" onClick={toggleUpload}>Home</div> }
            </div>
            {Modal ?( 
                <div className="selector-modal">
                    <div className="modal-content">
                        <select id="recipe-selector" onChange={changeRecipe} value={ModalRecipe} defaultValue={RecipeNum}>
                            {recipes.map((_, i) => (
                                <option key={i} value={i}>{recipes[i].name}</option>
                            ))}
                        </select>
                    </div>
                </div>
                ) : ("")}
            <p>The Best Space for My Mom's Recipes</p>
        </header>
        
    )
}

export default Header;