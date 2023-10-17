import React from "react";
import styles from './Links.module.scss'
import {Link} from "react-router-dom";
import add from '../../../assets/icons/Add.svg';
import check from '../../../assets/icons/Check.svg';
import exchange from '../../../assets/icons/Exchange.svg';
import send from '../../../assets/icons/Send.svg';

const Links = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.navigation__linkBox}>
                <Link to={'replenish/'} className={styles.navigation__link}>
                    <img src={add} alt="add"/>
                </Link>
                <p className={styles.navigation__linkName}>Replenish</p>
            </div>
            <div className={styles.navigation__linkBox}>
                <Link to={'limit_orders/'} className={styles.navigation__link}>
                    <img src={check} alt="check"/>
                </Link>
                <p className={styles.navigation__linkName}>Limit orders</p>
            </div>
            <div className={styles.navigation__linkBox}>
                <Link to={'exchange/'} className={styles.navigation__link}>
                    <img src={exchange} alt="exchange"/>
                </Link>
                <p className={styles.navigation__linkName}>Exchange</p>
            </div>
            <div className={styles.navigation__linkBox}>
                <Link to={'send/'} className={styles.navigation__link}>
                    <img src={send} alt="send"/>
                </Link>
                <p className={styles.navigation__linkName}>Send</p>
            </div>
        </div>
    )
}

export default Links;