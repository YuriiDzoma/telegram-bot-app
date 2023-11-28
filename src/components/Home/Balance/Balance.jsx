import React, {useEffect, useState} from "react";
import styles from './Balance.module.scss';
import Button from "../../Сommon/Button/Button";
import {useTelegram} from "../../../hooks/useTelegram";
import {useSelector} from "react-redux";
import {getBalance} from "../../../store/selectors";

const Balance = () => {
    const {telegram} = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, [])

    const CurrentBalance = useSelector(getBalance);

    // const theme = telegram.colorScheme;
    const theme = 'dark';

    return (
        <div className={styles.contentWrapper}>
            <h2 className={theme === 'dark' ? styles.balance : styles.balanceLight}>
                {CurrentBalance.token_name} {CurrentBalance.user_balance}
            </h2>
            <Button plus={true}>
                <span>Replenish</span>
            </Button>
        </div>
    )
}

export default Balance;