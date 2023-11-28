import React from "react";
import styles from './Cryptocurrency.module.scss';


const Cryptocurrency = ({icon, name, balance}) => {
    const iconUrl = `https://ce-bot.com${icon}`
    return (
        <>
            <span className={styles.cryptocurrency}>
                <span className={styles.cryptocurrency__box}>
                    <img src={iconUrl} alt=""/>
                    <span className={styles.cryptocurrency__name}>{name}</span>
                </span>
                <span className={styles.cryptocurrency__balance}>{balance}</span>
            </span>
        </>
    )
}

export default Cryptocurrency;