import React, { useState } from "react";
import Footer from "../components/Footer";
import logo from "../assets/images/DD-logo.png";
import { useNavigate } from "react-router-dom";

const Login = ({ recipe, RecipeNum }) => {

    let navigate = useNavigate(); 
    const routeChange = () =>{ 
        navigate("/DanasDishes/");
    }

    return (
        <div className="App login">
            <header>
                <div id="page-header">
                    <h1>Dana's <span>Dishes</span></h1>
                    {/* {Page === "Home" ? <div id="selector" onClick={toggleModal}>{Modal ? "X" : "Recipes"}</div> : ("")}
                    {Page === "Home" ? <div id="upload-toggle" onClick={toggleUpload}>Upload</div>
                    : <div id="upload-toggle" onClick={toggleUpload}>Home</div> } */}
                </div>
                <p>The Best Space for My Mom's Recipes</p>
            </header>
            <img id="logo" src={logo}></img>
            <div id="login" onClick={routeChange}>Login Here</div>
            <Footer />

        </div>
    )
}

export default Login;