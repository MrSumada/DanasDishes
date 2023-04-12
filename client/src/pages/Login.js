import React, { useState } from "react";
import logo from "../assets/images/DD-logo.png";

const Login = ({ Page, setPage, LoggedIn, setLoggedIn }) => {

    const [LoginModal, setLoginModal] = useState(false)
    const [SignUpModal, setSignUpModal] = useState(false)

    const loginUser = () => { setLoginModal(true) }
    const signUpUser = () => { setSignUpModal(true) }

    const loginToHome = () => {
        setLoggedIn(true)
        setPage("Home")
    }

    const signInToHome = () => {
        setLoggedIn(true)
        setPage("Home")
    }

    const closeModal = () => {
        setLoginModal(false)
        setSignUpModal(false)
    }

    return (
        <div className="App login">
            <img id="logo" src={logo} alt="Dana's Dishes Logo"></img>
            <div id="login-container">
                <div id="login" onClick={loginUser}>Login</div>
                <div id="signup" onClick={signUpUser}>Sign Up</div>
            </div>
            {LoginModal ?( 
                <div className="login-modal">
                    <div id="selector" onClick={closeModal}>X</div>
                    <div className="modal-content">
                        <div className="modal-item">
                            <label htmlFor="login-email">Email Address:</label>
                            <input id="login-email" name="login-email" type="email"></input>
                        </div>
                        <div className="modal-item">
                            <label htmlFor="login-password">Password:</label>
                            <input id="login-password" name="login-password" type="password"></input>
                        </div>
                        <input type="submit" value="Submit" onClick={loginToHome}></input>
                    </div>
                </div>
                ) : ("")}
            {SignUpModal ?( 
            <div className="signup-modal">
                <div id="selector" onClick={closeModal}>X</div>
                <div className="modal-content">
                    <div className="modal-item">
                        <label htmlFor="login-email">Email Address:</label>
                        <input id="login-email" name="login-email" type="email"></input>
                    </div>
                    <div className="modal-item">
                        <label htmlFor="signup-name">Username:</label>
                        <input id="signup-name" name="signup-name" type="text"></input>
                    </div>
                    <div className="modal-item">
                        <label htmlFor="signup-password">Password:</label>
                        <input id="signup-password" name="signup-password" type="password"></input>
                    </div>
                    <div className="modal-item">
                        <label htmlFor="signup-password-confirm">Confirm Password:</label>
                        <input id="signup-password-confirm" name="signup-password-confirm" type="password"></input>
                    </div>
                    <input type="submit" value="Submit" onClick={signInToHome}></input>
                </div>
            </div>
            ) : ("")}
        </div>
    )
}

export default Login;