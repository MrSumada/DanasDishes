import React, { useState, useEffect } from "react";


export default function Upload() {

    const [ingredientsNum, setIngredientsNum] = useState(1);
    const [stepsNum, setStepsNum] = useState(1);
    const [imagesNum, setImagesNum] = useState(1);

    const ingredientsChange = (e) => {
        setIngredientsNum(parseInt(e.target.value) || 0);
    } 
    const stepsChange = (e) => {
        setStepsNum(parseInt(e.target.value) || 0);
    } 
    const imagesChange = (e) => {
        setImagesNum(parseInt(e.target.value) || 0);
    } 

    return (
        <div className="upload">
            <div id="upload-title">
                <label htmlFor="title"> Recipe Name: </label>
                <input type="text" id="title"></input>
            </div>
            <div id="upload-difficulty">
                <label htmlFor="difficulty">Difficulty: </label>
                <select id="difficulty" name="difficulty" defaultValue="easy">
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div id="upload-time">
                <label style={{marginRight: '3vw'}}>Time: </label>
                <label>Hours: </label>
                <input type="number" id="hours-input"
                min="0"
                max="50"/>
                <label>Minutes: </label>
                <input type="number" id="minutes-input" 
                min="0"
                max="59"/>
            </div>
            <div id="upload-background">
                <label htmlFor="background">Background: </label>
                <textarea id="background-input"></textarea>
            </div>
            <div>
                <label>Number of Ingredients: </label>
                <input type="number" id="ingredients-num" 
                    min="1"
                    max="50"
                    defaultValue={ingredientsNum} 
                    onChange={ingredientsChange}
                    placeholder="0"
                />
            </div>
            
            <div id="upload-ingredient-list">
                {new Array(ingredientsNum).fill(0).map((_, i) => (
                    <div key={i} className="ingredient-list" id={`ingredient-upload-${i + 1}`}>
                        <label>{i+1}. </label>
                        <label>Quantity: </label>
                        <input type="text"></input>
                        <label>Ingredient: </label>
                        <input type="text" id={`ingredient-input-${i + 1}`}></input>
                    </div>
                ))}
            </div>
            <div>
                <label>Number of Steps: </label>
                <input type="number" id="ingredients-num" 
                    min="1"
                    max="50"
                    defaultValue={stepsNum} 
                    onChange={stepsChange}
                    placeholder="0"
                />
            </div>
            <div id="upload-step-list">
                {new Array(stepsNum).fill(0).map((_, i) => (
                    <div key={i} className="step-list" id={`step-upload-${i + 1}`}>
                        <label>{i+1}. </label>
                        <label>Step: </label>
                        <textarea id={`step-input-${i + 1}`}></textarea>
                    </div>
                ))}
            </div>
            <div>
                <label>Number of Images: </label>
                <input type="number" id="images-num" 
                    min="0"
                    max="20"
                    defaultValue={imagesNum} 
                    onChange={imagesChange}
                    placeholder="0"
                />
            </div>
            <div id="upload-image-list">
                {new Array(imagesNum).fill(0).map((_, i) => (
                    <div key={i} className="image-list" id={`image-upload-${i + 1}`}>
                        <label>{i+1}. </label>
                        <label>Image: </label>
                        <input type="url" id={`image-input-${i + 1}`}></input>
                    </div>
                ))}
            </div>
        
        
            
            <input type="submit" value="Submit"></input>
        </div>
    )
}