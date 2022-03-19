import React from 'react';
import  stl from "./SecondaryButton.module.css";
const SecondaryButton = ({children,...props}) => {
    return (
        <button {...props} className={stl.button}>
                {children}
        </button>
    );
}

export default SecondaryButton;
