import React from "react";
import './button.css';

const Button = (props) => {
    return (
        <button {...props} className={'Button ' + props.className}/>
    )
}

export default Button;