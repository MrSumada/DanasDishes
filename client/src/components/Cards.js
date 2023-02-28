import React, { useState, useEffect } from "react";
import Background from "./Background";
import Ingredients from "./Ingredients";
import Steps from "./Steps";
import Images from "./Images";

const Cards = ({ recipe }) => {

    const [Tab, setTab ] = useState("Ingredients");
    // const [storedTab, setStoredTab] = useState("Ingredients");
    const storage = JSON.parse(localStorage.getItem(`Tab`));

    useEffect(()=>{
        if (storage) {
            setTab(storage)
        }
        }, [])

    function switchTab (e) { 
        if ((Tab === "Ingredients" && e.target.id === "Steps") || (Tab === "Steps" && e.target.id === "Ingredients")) {
            setTab("Two");
            localStorage.setItem(`Tab`, JSON.stringify("Two"));
        } else if (Tab === "Two" && e.target.id === "Ingredients") {
            setTab("Ingredients");
            localStorage.setItem(`Tab`, JSON.stringify("Ingredients"));
        } else if (Tab === "Two" && e.target.id === "Steps") {
            setTab("Steps");
            localStorage.setItem(`Tab`, JSON.stringify("Steps"));
        } else {
            setTab(e.target.id);
            localStorage.setItem(`Tab`, JSON.stringify(e.target.id)); 
        }
    };

    return (
   
        <div>
            <div>
                {/* NAV BAR for the recipe */}
                <div className="nav-tabs">
                    <div className={`nav ${(Tab==="Story") ? "active" : ""}`} id="Story" onClick={switchTab}>Background</div>
                    <div className={`nav ${((Tab==="Ingredients" || (Tab==="Two"))) ? "active" : ""}`} id="Ingredients" onClick={switchTab}>Ingredients</div>
                    <div className={`nav ${((Tab==="Steps") || (Tab==="Two")) ? "active" : ""}`} id="Steps" onClick={switchTab}>Steps</div>
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
                    <Ingredients recipe={recipe} Tab={Tab}/>
                </div>
            </div>    

            {/* Steps for the Recipe */}
            <div>
                <div 
                style={{"display": `${(Tab==="Steps") ? "block" : "none"}`}}
                className="card steps-container" id="card-1">
                    <Steps recipe={recipe} Tab={Tab}/>
                </div>
            </div>
            {/* Pictures for the Recipe */}
            <div>
                <div
                style={{"display": `${(Tab==="Images") ? "flex" : "none"}`}}
                className="card picture-container" id="card-4">
                    <Images recipe={recipe} />
                </div>
            </div>
            {/* Two-Up Display for the Recipe */}
            <div>
                <div
                style={{"display": `${(Tab==="Two") ? "flex" : "none"}`}}
                className="card two-up-container" id="cards-2-3">
                    <div className="half left">
                        <Ingredients recipe={recipe} Tab={Tab}/>
                    </div>
                    <div className="half right">
                        <Steps recipe={recipe} Tab={Tab}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
    

export default Cards;