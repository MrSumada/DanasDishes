import React, { useState, useEffect } from "react";

export default function Upload() {

    const [ingredientsNum, setIngredientsNum]  =  useState(1);
    const ingredientsChange = (e) => {
        setIngredientsNum(e.target.value);
    } 

    useEffect (() => {
        console.log(ingredientsNum)
    })

    return (
        <div className="upload">
            <label for="title"> Recipe Name: </label>
            <input type="text" id="title"></input>
            <label for="difficulty">Difficulty: </label>
            <select id="difficulty" name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium" selected>Medium</option>
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
            <input type="number" id="ingredients-num" defaultValue="1" 
            onChange={ingredientsChange}
            />
            
            <input type="submit" value="Submit"></input>
        </div>
    )
}