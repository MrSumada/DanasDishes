import React, { useEffect, useState } from "react";
import Select from 'react-select'

const Header = ({ recipes, RecipeNum, setRecipeNum, Page, setPage, Tab, setTab }) => {
    
    const [Modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(Modal => !Modal)
    }
    const toggleUpload = () => {
        if (Page === "Home") { 
            setPage("Upload")
            setModal(false)
        }
        if (Page === "Upload") { 
            setPage("Home") 
            setModal(false)
        }
    }

    const changeRecipe = (e) => {
        localStorage.clear();
        setRecipeNum(e.value);
        localStorage.setItem(`Tab`, JSON.stringify(Tab));
        setTimeout(window.location.reload(), 0)
        
    } 

    let options = [];
    for (let i = 0; i < recipes.length; i++){
        options.push({value: i, label: recipes[i].name})
    }

    useEffect(() => {
        localStorage.setItem(`Recipe`, RecipeNum); 
        setModal(false)
    }, [RecipeNum])

    return (
        <header>
            <div id="page-header">
                <h1>Dana's <span>Dishes</span></h1>
                {Page === "Home" ? <div id="selector" onClick={toggleModal}>{Modal ? "X" : "Recipes"}</div> : ("")}
                {Page === "Home" ? <div id="upload-toggle" onClick={toggleUpload}>Upload</div>
                : <div id="upload-toggle" onClick={toggleUpload}>Home</div> }
            </div>
            {Modal ?( 
                <div className="selector-modal">
                    <div className="modal-content">
                        {/* <select id="recipe-selector" onChange={changeRecipe} value={RecipeNum} defaultValue={RecipeNum}>
                            {recipes.map((_, i) => (
                                <option key={i} value={i}>{recipes[i].name}</option>
                            ))}
                        </select> */}
                        <Select 
                            options={options} 
                            onChange={changeRecipe} 
                            value={RecipeNum} 
                            defaultValue={RecipeNum}
                            styles={{
                                control: (styles, state) => ({...styles, backgroundColor: 'var(--light-color)', borderColor: state.isFocused ? 'var(--mid-color)' : 'var(--darkest-color)'}),
                                option: (styles) => ({...styles, color: 'var(--darkest-color)', backgroundColor: 'var(--light-color)'}),
                                }}
                        />
                    </div>
                </div>
                ) : ("")}
            <p>The Best Space for My Mom's Recipes</p>
        </header>
        
    )
}

export default Header;