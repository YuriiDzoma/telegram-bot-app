import React from "react";
import Button from "../Button/Button";
import styles from './Header.module.scss'
import {useTelegram} from "../../hooks/useTelegram";
import Back from "../Button/Back";

const Header = () => {

    const {closeTelegram, user} = useTelegram();

    return (
        <div className={styles.header}>
            <Back />
            <p className={'wallet-title'}>Wallet</p>
            <button>option</button>

            {/*<Button onClick={closeTelegram}>Закрити</Button>*/}
            {/*<span className={'username'}>{user?.username}</span>*/}
        </div>
    )
}

export default Header;