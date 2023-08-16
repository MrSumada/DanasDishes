import React, { useEffect, useState } from "react";
import Select from 'react-select'

const Header = ({ recipes, RecipeNum, setRecipeNum, Page, setPage, Tab, LoggedIn, setLoggedIn, setCurrentAuthorId }) => {
    
    // Toggle Recipe Selector Modal
    const [Modal, setModal] = useState(false);
    const [Menu, setMenu] = useState(false)
    const toggleModal = () => { setModal(Modal => !Modal) }
    const toggleMenu = () => { setMenu(Menu => !Menu) }
    const routeLogin = () => { setPage("Login") }
    const routeBack = () => { setPage("Home") }
    const handleRecipeView = () => {
        let authorId = 1
        setMenu(false)
        setPage("RecipeList")
        setCurrentAuthorId(authorId)
    }
    const handleRecipeSearch = () => {
        setMenu(false)
        setModal(true)
    }
    const logout = () => { 
        setLoggedIn(false) 
        setMenu(false)
    }

    // Toggle Upload Page
    const toggleUpload = () => {
        if (Page === "Home") { 
            setPage("Upload")
            setModal(false)
            setMenu(false)
        }
        if (Page === "Upload") { 
            setPage("Home") 
            setModal(false)
            setMenu(false)
        }
    }

    // when changing recipe delete localStorage and set recipe and tab, then reload
    const changeRecipe = (e) => {
        localStorage.clear();
        setRecipeNum(e.value);
        setPage("Home");
        localStorage.setItem(`Tab`, JSON.stringify(Tab));
    } 

    // Array of recipe objects
    let options = [];

    let sortedRecipeSelections = [...recipes].sort(
        function (a, b) {
            const name1 = a.name.toUpperCase();
            const name2 = b.name.toUpperCase();
            if (name1 > name2) { return 1; }
            if (name1 < name2) { return -1; }
            return 0;
        })
        
    for (let i = 0; i < sortedRecipeSelections.length; i++){
        if (sortedRecipeSelections[i]._id === recipes[RecipeNum]._id) {
            options.push({value: sortedRecipeSelections[i]._id, label: `✓ ${sortedRecipeSelections[i].name}`})
        } else {
            options.push({value: sortedRecipeSelections[i]._id, label: sortedRecipeSelections[i].name})
        }
    }

    // set recipe and close modal when recipe selected
    useEffect(() => {
        localStorage.setItem(`Recipe`, RecipeNum); 
        setModal(false)
    }, [RecipeNum])

    return (
        <header>
            <div id="page-header">
                <h1>Dana's <span>Dishes</span></h1>
                {(Page === "Home" && !Menu) || ("RecipeList" && !Menu) ? <div id="selector" onClick={toggleModal}>{Modal ? "X" : "Recipes"}</div> : ("")}
                {(Page === "Home" && !LoggedIn && !Modal) || ("RecipeList" && LoggedIn && !Modal) ? <div id="upload-toggle" onClick={toggleMenu}>{Menu ? "X" : "Menu"}</div> : ("")}
                {(Page === "Home" && !LoggedIn && !Modal) || ("RecipeList" && !LoggedIn && !Modal) ? <div id="upload-toggle" onClick={routeLogin}>Log in</div> : ("")}
                {Page === "Upload" ? <div id="upload-toggle" onClick={toggleUpload}>Home</div> : ("")}
                {Page === "RecipeList" ? <div id="back-button" onClick={routeBack}>Back</div> : ("")}
            </div>
            {Modal ?( 
                <div className="selector-modal">
                    <div className="modal-content">
                        <Select 
                            options={options} 
                            onChange={changeRecipe} 
                            onMenuClose={toggleModal}
                            value={RecipeNum} 
                            defaultValue={RecipeNum}
                            styles={{
                                control: (styles) => ({...styles, width: "55vw", backgroundColor: 'var(--light-color)'}),
                                option: (styles, state) => ({...styles, color: 'var(--darkest-color)', backgroundColor: state.isFocused ? 'var(--mid-color)' : 'var(--light-color)'}),
                                }}
                        />
                    </div>
                </div>
                ) : ("")}
                {Menu ?( 
                <div className="selector-modal">
                    <div className="modal-content">
                        <div className="menu-item" onClick={toggleUpload}>Upload New Recipe</div>
                        <div className="menu-item" onClick={handleRecipeSearch}>Search All Recipes</div>
                        <div className="menu-item" onClick={handleRecipeView}>View Your Recipes</div>
                        <div className="menu-item" onClick={logout}>Logout</div>
                    </div>
                </div>
                ) : ("")}
            <p>The Best Space for My Mom's Recipes</p>
        </header>
        
    )
}

export default Header;