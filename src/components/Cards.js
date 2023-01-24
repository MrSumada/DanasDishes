import React, { useState } from "react";
import Background from "./Background";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import Images from "./Images";

const Cards = ({ recipe }) => {

    const [Tab, setTab ] = useState("Ingredients");
    function switchTab (e) { 
        setTab(e.target.id) 
    };

    return (
   
        <div>
            <div>
                {/* NAV BAR for the recipe */}
                <div className="nav-tabs">
                    <div className={`nav ${(Tab==="Story") ? "active" : ""}`} id="Story" onClick={switchTab}>Background</div>
                    <div className={`nav ${(Tab==="Ingredients") ? "active" : ""}`} id="Ingredients" onClick={switchTab}>Ingredients</div>
                    <div className={`nav ${(Tab==="Steps") ? "active" : ""}`} id="Steps" onClick={switchTab}>Steps</div>
                    <div className={`nav ${(Tab==="Images") ? "active" : ""}`} id="Images" onClick={switchTab}>Images</div>
                </div>

                {/* STORY for the Recipe */}
                <div 
                style={{"display": `${(Tab==="Story") ? "block" : "none"}`}}
                className="card story-container" id="card-1">
                    
                    <Background recipe={recipe} />
                </div>
            </div>

            {/* INGREDIENTS for the Recipe */}
            <div>
                <div
                style={{"display": `${(Tab==="Ingredients") ? "block" : "none"}`}}
                className="card ingredients-container" id="card-1">
                    <Ingredients recipe={recipe} />
                </div>
            </div>    


            {/* Pictures for the Recipe */}
            <div>
                <div 
                style={{"display": `${(Tab==="Steps") ? "block" : "none"}`}}
                className="card" id="card-1">
                    <Steps recipe={recipe} />
                </div>
            </div>
            <div>
                <div
                style={{"display": `${(Tab==="Images") ? "flex" : "none"}`}}
                className="card picture-container" id="card-4">
                    <Images recipe={recipe} Tab={Tab} />
                </div>
            </div>
        </div>
    )
}
    

export default Cards;