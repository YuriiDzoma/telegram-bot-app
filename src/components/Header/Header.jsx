import React, {useEffect, useState} from "react";
import styles from './Header.module.scss'
import {useTelegram} from "../../hooks/useTelegram";
import Back from "../Сommon/Button/Back";
import {useLocation} from "react-router";
import SettingsPopup from "./Settings/SettingsPopup";

const Header = () => {
    const [title, setTitle] = useState('Wallet')
    const {closeTelegram, user} = useTelegram();
    const location = useLocation().pathname;

    useEffect(() => {
        switch (location) {
            case '/' :
                setTitle('Wallet');
                break;
            case '/replenish/' :
                setTitle('Replenish');
                break;
            case '/limit_orders/' :
                setTitle('Limit Orders');
                break;
            case '/exchange/' :
                setTitle('Exchange');
                break;
            case '/send/' :
                setTitle('Send');
                break;
            default:
                setTitle('Wallet');
                break;
        }
    },[location])

    const [toggleMenu, setToggleMenu] = useState(false)


    return (
        <div className={styles.header}>
            <Back />
            <p className={styles.walletTitle}>{title}</p>
            <button onClick={() => setToggleMenu(!toggleMenu)} className={styles.buttonOptionDark}>
                <span className={toggleMenu ? styles.dotsRotate : styles.dots}/>
            </button>
            <SettingsPopup toggleMenu={toggleMenu} />

            {/*<Button onClick={closeTelegram}>Закрити</Button>*/}
            {/*<span className={'username'}>{user?.username}</span>*/}
        </div>
    )
}

export default Header;