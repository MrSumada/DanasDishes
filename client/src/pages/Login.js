import React, { useState } from "react";
import Footer from "../components/Footer";
import logo from "../assets/images/DD-logo.png";

const Login = ({ Page, setPage, LoggedIn, setLoggedIn }) => {

    const loginUser = () =>{ 
        setLoggedIn(true)
        setPage("Home")
    }

    return (
        <div className="App login">
            <img id="logo" src={logo}></img>
            <div id="login" onClick={loginUser}>Login Here</div>
            <Footer />
        </div>
    )
}

export default Login;