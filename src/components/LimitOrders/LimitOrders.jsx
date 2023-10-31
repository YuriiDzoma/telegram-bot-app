import React from "react";
import styles from './LimitOrders.module.scss'
import Converting from "../Exchange/Converting/Converting";

const LimitOrders = () => {
    return (
        <div className={styles.limitOrdersWrapper}>
            <Converting order />
        </div>
    )
}

export default LimitOrders;