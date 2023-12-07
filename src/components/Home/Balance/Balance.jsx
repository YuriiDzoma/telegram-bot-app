import React, {useEffect} from "react";
import styles from './Balance.module.scss';
import Button from "../../Сommon/Button/Button";
import {useTelegram} from "../../../hooks/useTelegram";
import {useSelector} from "react-redux";
import {getBalance} from "../../../store/selectors";
import {useNavigate} from "react-router-dom";

const Balance = () => {
    const navigate = useNavigate();
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
            <button onClick={() => navigate('/replenish/')} className={styles.buttonPlus}>
                <span>Replenish</span>
            </button>
        </div>
    )
}

export default Balance;