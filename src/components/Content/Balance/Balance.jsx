import React, {useState} from "react";
import styles from './Balance.module.scss';
import Button from "../../Button/Button";

const Balance = () => {

    const [balance, setBalance] = useState(293);

    return (
        <div className={styles.contentWrapper}>
            <h2 className={styles.balance}>USDT {balance}</h2>
            <Button plus={true}>
                <span>Replenish</span>
            </Button>
        </div>
    )
}

export default Balance;