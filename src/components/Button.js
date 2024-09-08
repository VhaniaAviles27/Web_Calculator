import React from "react";
import './Button.css'

function Button ({label, onClick, className, ...props}){
    return (
        <button 
        className={`button ${className}`}
        onClick={onClick}
        {...props}
        >
            {label}
        </button>
    )
}
export default Button;