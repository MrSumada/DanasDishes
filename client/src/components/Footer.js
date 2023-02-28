import React, { useEffect, useState } from "react";


const Footer = ({style}) => {
    let upload = false;
    if (style === "upload") {
        upload = true;
    }
    const [Food] = useState(require('random-food-emoji'));    

    if (upload === true) {
        return (
            <footer style={{backgroundColor: "var(--light-off-color)"}}>{Food} Love, Adam {Food}</footer>
        )
    }
    else {
        return (
            <footer><h6>{Food} Love, Adam {Food}</h6></footer>
        )
    }
    
}

export default Footer;