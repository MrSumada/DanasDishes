import React, { useState, useEffect } from "react";
import IngredientsUpload from "../components/IngredientsUpload";

export default function Upload() {

    const [ingredientsNum, setIngredientsNum] = useState(3);
    const ingredientsChange = (e) => {
        setIngredientsNum(parseInt(e.target.value));
    } 

    useEffect (() => {
        console.log(ingredientsNum)
    }, [ingredientsNum])

    return (
        <div className="upload">
            <label for="title"> Recipe Name: </label>
            <input type="text" id="title"></input>
            <label for="difficulty">Difficulty: </label>
            <select id="difficulty" name="difficulty" defaultValue="easy">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <label>Time: </label>
            <label>Hours </label>
            <input type="number" id="hours" />
            <label>Minutes </label>
            <input type="number" id="minutes" />
            <label for="background">Background: </label>
            <textarea></textarea>
            <label>Number of Ingredients </label>
            <input type="number" id="ingredients-num" 
                min="1"
                max="50"
                defaultValue={ingredientsNum} 
                onChange={ingredientsChange}
            />
            <IngredientsUpload num={ingredientsNum} />
        
        
            
            <input type="submit" value="Submit"></input>
        </div>
    )
}