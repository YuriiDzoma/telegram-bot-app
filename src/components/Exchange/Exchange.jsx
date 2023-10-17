import React from "react";
import styles from './Exchange.module.scss'
import Converting from "./Converting/Converting";

const Exchange = () => {

    return (
        <div className={styles.ExchangeWrapper}>
            <Converting />
        </div>
    )
}

export default Exchange;