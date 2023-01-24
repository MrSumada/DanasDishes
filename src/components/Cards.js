import React, { useState } from "react";
import picture from "../assets/images/IMG_1341.jpg"
import Ingredients from "./Ingredients";

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
                    <br />
                    {recipe.story}
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
                    <div className="step">
                        <p>
                            <input type="checkbox" id="step-0"></input>
                            <label for="step-0">
                            Pie will be cooked on oven’s middle rack. Place 1 rack in the bottom half of the oven, under the rack where pie will be cooked. Put a large piece of heavy-duty aluminum foil on lower rack, and turn all edges up 1 inch like a large sheet pan. Make sure it is larger than the pie, so the foil will catch any drippings. Preheat oven to 375.
                            </label>
                        </p>
                    </div>
                    <div className="step">
                        <p>
                            <input type="checkbox" id="step-2"></input>
                            <label for="step-2">
                            Mix sugar, flours, salt and spices well. Set aside. 
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <input type="checkbox" id="step-3"></input>
                            <label for="step-3">
                            Roll out bottom crust, fit into pan. Cover all surfaces with plastic wrap. Roll out top crust, leave on board covered with plastic wrap.
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                        <input type="checkbox" id="step-4"></input>
                        <label for="step-4">
                            Roll out bottom crust, fit into pan. Cover all surfaces with plastic wrap. Roll out top crust, leave on board covered with plastic wrap.
                        </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <input type="checkbox" id="step-5"></input>
                            <label for="step-5">
                            Peel and core apples. Cut 1/4” thick. Place in a large bowl. Add sugar mixture and toss to coat all pieces. Turn into bottom crust, making sure slices are lying flat to allow a minimum of air pockets. Dot with butter. Run fingers under water, and wet all around top edge of crust. Place top crust over. Trim all edges with about 1” overhang from edge of rim, pressing top crust onto bottom crust. Roll overhang under itself to create a standing edge on top of pie rim. Flute with knuckles. .
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <input type="checkbox" id="step-6"></input>
                            <label for="step-6">
                            Cut decorative slits on top crust to allow steam to escape. Sprinkle top with sugar if desired. Bake 1 hour 10 minutes to 1 hour 30 minutes, until a knife inserted through slits goes in without resistance—but check at 30, 45, and minutes. If fluted edges are browning too quickly, cover with strips of foil. 
                            </label>
                        </p>
                    </div>
                    <div>
                        <p>
                            <input type="checkbox" id="step-7"></input>
                            <label for="step-7">
                            Cool at least 30 minutes before serving. Refrigerate leftovers.
                            </label>
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div
                style={{"display": `${(Tab==="Images") ? "flex" : "none"}`}}
                className="card picture-container" id="card-4">
                    <img className="picture" src={picture} alt="pie"></img>
                </div>
            </div>
        </div>
    )
}
    

export default Cards;