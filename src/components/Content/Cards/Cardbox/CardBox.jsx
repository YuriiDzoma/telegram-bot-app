import React from "react";

const CardBox = ({value, number, code, date, type}) => {
    return (
        <div>
            <p>{value}</p>
            <p>{number}</p>
            <p>{code}</p>
            <p>{date}</p>
            <p>{type}</p>
        </div>
        // <div className={styles.card}>
        //     <div className={styles.cardSettings}>
        //         <button>O</button>
        //     </div>
        //     <p className={styles.cardValue}>
        //         <span className={styles.cardValue__current}>{value} </span>
        //         /
        //         <span className={styles.cardValue__limit}> 5000</span>
        //     </p>
        //     <div className={styles.cardNumber}>
        //         <p>{number}</p>
        //         <p>{code}</p>
        //     </div>
        //     <div className={styles.cardDate}>
        //         <p>{date}</p>
        //         <p>{type}</p>
        //     </div>
        // </div>
    )
}

export default CardBox;