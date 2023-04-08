import React, { useEffect, useState } from "react";
import Select from 'react-select'

const Header = ({ recipes, RecipeNum, setRecipeNum, Page, setPage, Tab, LoggedIn, setLoggedIn }) => {
    
    // Toggle Recipe Selector Modal
    const [Modal, setModal] = useState(false);
    const [Menu, setMenu] = useState(false)

    const toggleModal = () => { setModal(Modal => !Modal) }
    const toggleMenu = () => { setMenu(Menu => !Menu) }
    const routeLogin = () => { setPage("Login") }
    const handleMenuView = () => {
        setMenu(false)
        setModal(true)
        setLoggedIn(true)
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
        localStorage.setItem(`Tab`, JSON.stringify(Tab));
        // setTimeout(window.location.reload(), 0);
    } 

    // Array of recipe objects
    let options = [];
    for (let i = 0; i < recipes.length; i++){
        options.push({value: i, label: recipes[i].name})
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
                {Page === "Home" && !Menu ? <div id="selector" onClick={toggleModal}>{Modal ? "X" : "Recipes"}</div> : ("")}
                {Page === "Home" && LoggedIn === true && !Modal ? <div id="upload-toggle" onClick={toggleMenu}>{Menu ? "X" : "Menu"}</div> : ("")}
                {Page === "Home" && LoggedIn === false && !Modal? <div id="upload-toggle" onClick={routeLogin}>Log in</div> : ("")}
                {Page === "Upload" ? <div id="upload-toggle" onClick={toggleUpload}>Home</div> : ("")}
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
                                control: (styles, state) => ({...styles, width: "40vw", backgroundColor: 'var(--light-color)', borderColor: state.isFocused ? 'var(--mid-color)' : 'var(--darkest-color)'}),
                                option: (styles) => ({...styles, color: 'var(--darkest-color)', backgroundColor: 'var(--light-color)'}),
                                }}
                        />
                    </div>
                </div>
                ) : ("")}
                {Menu ?( 
                <div className="selector-modal">
                    <div className="modal-content">
                        <div className="menu-item" onClick={toggleUpload}>Upload New Recipe</div>
                        <div className="menu-item" onClick={handleMenuView}>View Your Recipes</div>
                        <div className="menu-item" onClick={logout}>Logout</div>
                    </div>
                </div>
                ) : ("")}
            <p>The Best Space for My Mom's Recipes</p>
        </header>
        
    )
}

export default Header;