import React from "react";
import styles from './Links.module.scss'
import {Link} from "react-router-dom";

const Links = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__linkBox}>
                <Link to={'replenish/'} className={styles.navigation__link}>
                    <span></span>
                </Link>
                <p className={styles.navigation__linkName}>Replenish</p>
            </div>
            <div className={styles.navigation__linkBox}>
                <Link to={'limit_orders/'} className={styles.navigation__link}>
                    <span></span>
                </Link>
                <p className={styles.navigation__linkName}>Limit orders</p>
            </div>
            <div className={styles.navigation__linkBox}>
                <Link to={'exchange/'} className={styles.navigation__link}>
                    <span></span>
                </Link>
                <p className={styles.navigation__linkName}>Exchange</p>
            </div>
            <div className={styles.navigation__linkBox}>
                <Link to={'send/'} className={styles.navigation__link}>
                    <span></span>
                </Link>
                <p className={styles.navigation__linkName}>Send</p>
            </div>
        </div>
    )
}

export default Links;