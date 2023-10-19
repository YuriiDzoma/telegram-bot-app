import React from "react";
import styles from "../Links.module.scss";
import {Link} from "react-router-dom";


const LinkPage = ({link, icon, name}) => {
    return (
        <div className={styles.navigation__linkBox}>
            <Link to={link} className={styles.navigation__link}>
                <img src={icon} alt={icon}/>
            </Link>
            <p className={styles.navigation__linkName}>{name}</p>
        </div>
    )
}

export default LinkPage;