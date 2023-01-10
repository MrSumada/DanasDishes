import React, { useState } from "react";
import picture from "../assets/images/IMG_1341.jpg"
import Ingredient from "./Ingredient";

const Cards = () => {

    const [Tab, setTab ] = useState("Ingredients");
    function switchTab (e) { 
        setTab(e.target.id) 
        console.log(Tab)
    };

    if ( Tab === "Story") {
        return (
            <div>
                <div className="nav-tabs">
                    <div className="nav active" id="Story" onClick={switchTab}>Story</div>
                    <div className="nav" id="Ingredients"  onClick={switchTab}>Ingredients</div>
                    <div className="nav" id="Steps"  onClick={switchTab}>Steps</div>
                    <div className="nav" id="Images"  onClick={switchTab}>Images</div>
                </div>
                <div className="card story-container" id="card-1">
                    Merry Christmas, Mom!  🎄
                </div>
            </div>
            
        )
    }
    if (Tab === "Ingredients") {
        return (
            <div>
                <div className="nav-tabs">
                    <div className="nav" id="Story" onClick={switchTab}>Story</div>
                    <div className="nav active" id="Ingredients"  onClick={switchTab}>Ingredients</div>
                    <div className="nav" id="Steps"  onClick={switchTab}>Steps</div>
                    <div className="nav" id="Images"  onClick={switchTab}>Images</div>
                </div>
                <div className="card ingredients-container" id="card-1">
                    <Ingredient />
                    <p>
                    <input type="checkbox" name="step-2"></input>
                    <label for="step-2"><span className="amount">1 ½ t.</span> Saigon cinnamon (or 2 t. less strong cinnamon)</label>
                    
                    </p>
                    <p>
                    <input type="checkbox" name="step-3"></input>
                    <label for="step-3"><span className="amount" name="step-3">¾ to 1 t</span> 1/3 of a nutmeg, grated—about ¾ to 1 t.</label>
                    
                    </p>
                    <p>
                    <input type="checkbox" name="step-4"></input>
                    <label for="step-4"><span className="amount">2 T.</span> flour</label>
                    
                    </p>
                    <p>
                    <input type="checkbox" name="step-5"></input>
                    <label for="step-5"><span className="amount">2 T.</span> tapioca flour</label>
                    
                    </p>
                    <p>
                    <input type="checkbox" name="step-6"></input>
                    <label for="step-6"><span className="amount">3/4 t.</span> salt</label>
                    
                    </p>
                    <p>
                    <input type="checkbox" name="step-7"></input>
                    <label for="step-7"><span className="amount">12 to 14 c.</span> peeled, sliced green apples—Pippin or Granny Smith. Ripe apples will be less “apple” green and more yellow-green. They should also have a blush on one side. </label>
                    
                    </p>
                    <p>
                    <input type="checkbox" name="step-8"></input>
                    <label for="step-8"><span className="amount">2 T.</span> butter</label>
                    
                    </p>
                    <p>
                    <input type="checkbox" name="step-9"></input>
                    <label for="step-9"><span className="amount"></span>Crust for Deep-Dish 2-Crust pie (see recipe)</label>
                    </p>
                    
                </div>
            </div>    
        )
    }
    if (Tab === "Steps") {
        return (
            <div>
                <div className="nav-tabs">
                    <div className="nav" id="Story" onClick={switchTab}>Story</div>
                    <div className="nav" id="Ingredients"  onClick={switchTab}>Ingredients</div>
                    <div className="nav active" id="Steps"  onClick={switchTab}>Steps</div>
                    <div className="nav" id="Images"  onClick={switchTab}>Images</div>
                </div>
                <div className="card" id="card-1">
                    <div className="step">
                        <p>
                        Pie will be cooked on oven’s middle rack. Place 1 rack in the bottom half of the oven, under the rack where pie will be cooked. Put a large piece of heavy-duty aluminum foil on lower rack, and turn all edges up 1 inch like a large sheet pan. Make sure it is larger than the pie, so the foil will catch any drippings. Preheat oven to 375.
                        </p>
                    </div>
                    <div className="step">
                        <p>
                        Mix sugar, flours, salt and spices well. Set aside. 
                        </p>
                    </div>
                    <div>
                        <p>
                        Roll out bottom crust, fit into pan. Cover all surfaces with plastic wrap. Roll out top crust, leave on board covered with plastic wrap.
                        </p>
                    </div>
                    <div>
                        <p>
                        Roll out bottom crust, fit into pan. Cover all surfaces with plastic wrap. Roll out top crust, leave on board covered with plastic wrap.
                        </p>
                    </div>
                    <div>
                        <p>
                        Peel and core apples. Cut 1/4” thick. Place in a large bowl. Add sugar mixture and toss to coat all pieces. Turn into bottom crust, making sure slices are lying flat to allow a minimum of air pockets. Dot with butter. Run fingers under water, and wet all around top edge of crust. Place top crust over. Trim all edges with about 1” overhang from edge of rim, pressing top crust onto bottom crust. Roll overhang under itself to create a standing edge on top of pie rim. Flute with knuckles. .
                        </p>
                    </div>
                    <div>
                        <p>
                        Cut decorative slits on top crust to allow steam to escape. Sprinkle top with sugar if desired. Bake 1 hour 10 minutes to 1 hour 30 minutes, until a knife inserted through slits goes in without resistance—but check at 30, 45, and minutes. If fluted edges are browning too quickly, cover with strips of foil. 
                        </p>
                    </div>
                    <div>
                        <p>
                        Cool at least 30 minutes before serving. Refrigerate leftovers.
                        </p>
                    </div>
                </div>
            </div>
        )
    }
    if (Tab === "Images") {
        return (
            <div>
                <div className="nav-tabs">
                    <div className="nav" id="Story" onClick={switchTab}>Story</div>
                    <div className="nav" id="Ingredients"  onClick={switchTab}>Ingredients</div>
                    <div className="nav" id="Steps"  onClick={switchTab}>Steps</div>
                    <div className="nav active" id="Images"  onClick={switchTab}>Images</div>
                </div>
                <div className="card picture-container" id="card-4">
                    <img className="picture" src={picture} alt="pie"></img>
                </div>
            </div>
        )
        }
}
    

export default Cards;