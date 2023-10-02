import styles from "./CardBox.module.scss";
import React from "react";


const CardBox = ({value, number, code, date, type}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardSettings}>
                <button>O</button>
            </div>

            <div className={styles.cardNumber}>
                <p>{number}</p>
                <p>{code}</p>
            </div>
            <div className={styles.cardDate}>
                <p>{date}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default CardBox;