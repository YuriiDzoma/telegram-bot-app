import React from "react";
import styles from './Header.module.scss'
import {useTelegram} from "../../hooks/useTelegram";
import Back from "../Button/Back";

const Header = ({theme}) => {

    const {closeTelegram, user} = useTelegram();

    return (
        <div className={styles.header}>
            <Back />
            <p className={styles.walletTitle}>Wallet</p>
            <button className={theme === 'dark' ? styles.buttonOptionDark : styles.buttonOptionLight}>
                <span className={styles.dots}/>
            </button>

            {/*<Button onClick={closeTelegram}>Закрити</Button>*/}
            {/*<span className={'username'}>{user?.username}</span>*/}
        </div>
    )
}

export default Header;