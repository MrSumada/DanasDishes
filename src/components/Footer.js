import React from "react";


const Footer = () => {
    
    const emoji = require('random-food-emoji')

    return (
        <footer>{emoji()}</footer>
    )
}

export default Footer;