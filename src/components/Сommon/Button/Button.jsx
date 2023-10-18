import React from "react";
import styles from './button.module.scss'

const Button = ({plus = false, children, disabled}) => {

    return (
        <button disabled={disabled} className={plus ? styles.buttonPlus : styles.button}>{children}</button>
    )
}

export default Button;