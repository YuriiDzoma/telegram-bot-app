import React from "react";
import styles from './Transaction.module.scss'


const Transaction = ({icon, token, date_create, amount, table_name}) => {
    const iconUrl = `https://ce-bot.com${icon}`
    const deposit = table_name === 'deposit';
    const arr = date_create.split(' ');
    const date = arr[0].split('-').reverse().join('.');
    const time = arr[1].slice(0, -3);

    return (
        <span className={styles.transaction}>
            <span className={styles.transaction__leftBox}>
                <img src={iconUrl} alt=""/>
                <span className={styles.transaction__info}>
                    <span className={styles.transaction__name}>{token}</span>
                    <span className={styles.transaction__date}>
                        <span>{date}</span><span className={styles.transaction__dot}/><span>{time}</span>
                    </span>
                </span>
            </span>
            <span className={deposit ? styles.transaction__sumDeposit : styles.transaction__sum}>
                <span>{deposit ? `+ ${amount}` : `- ${amount}`}</span>
            </span>
        </span>
    )
}

export default Transaction;