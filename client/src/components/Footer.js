import React, { useEffect, useState } from "react";


const Footer = ({style}) => {
    let upload = false;
    if (style === "upload") {
        upload = true;
    }
    const [Food] = useState(require('random-food-emoji'));    

    if (upload === true) {
        return (
            <footer style={{backgroundColor: "var(--light-off-color)"}}><h6>{Food} Love, Adam</h6></footer>
        )
    }
    else {
        return (
            <footer  style={{color: "var(--light-off-color)"}}><h6>{Food} Love, Adam</h6></footer>
        )
    }
    
}

export default Footer;