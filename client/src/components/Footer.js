import React, { useEffect } from "react";


const Footer = ({style}) => {
    let upload = false;
    if (style === "upload") {
        upload = true;
    }
    const emoji = require('random-food-emoji')

    if (upload === true) {
        return (
            <footer style={{backgroundColor: "var(--light-off-color)"}}>{emoji()}</footer>
        )
    }
    else {
        return (
            <footer>{emoji()}</footer>
        )
    }
    
}

export default Footer;