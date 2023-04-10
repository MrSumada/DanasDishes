import React, { useState } from "react";


const Footer = ({page}) => {
    let upload = false;
    if (page === "blue") {
        upload = true;
    }
    const [Food] = useState(require('random-food-emoji'));    

    if (upload === true) {
        return (
            <footer style={{backgroundColor: "var(--light-off-color)", paddingBottom: "20px", color: "var(--mid-off-color)"}}>
                <h6>
                    {Food} 
                    {/* Love, Adam */}
                </h6>
            </footer>
        )
    }
    else {
        return (
            <footer style={{color: "var(--light-off-color)"}}>
                <h6>
                    {Food} 
                    {/* <span style={{opacity: ".15"}}>Love, Adam</span>
                    {Food} */}
                </h6>
            </footer>
        )
    }
    
}

export default Footer;