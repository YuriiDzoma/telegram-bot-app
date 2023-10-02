import styles from "./CardBox.module.scss";
import React from "react";


const CardBox = ({value, number, code, date, type}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardSettings}>
                <button>O</button>
            </div>
        </div>
    )
}

export default CardBox;