import React, { useState } from "react";

const IngredientsUpload = ((props) => {



    return (
        <div >
            {new Array(props.num).fill(0).map((_, index) => (
                <div key={index} className="list">
                    <div>hello</div>
                </div>
            ))}
        </div>
        
    )
    
})

export default IngredientsUpload;