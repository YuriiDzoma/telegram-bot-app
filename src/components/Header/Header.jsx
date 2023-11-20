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
            case '/info/' :
                setTitle('Info');
                break;
            case '/settings/' :
                setTitle('Settings');
                break;
            case '/language/' :
                setTitle('Language');
                break;
            case '/fee_section/' :
                setTitle('Fee section');
                break;
            case '/terms_and_conditions/' :
                setTitle('Terms and conditions');
                break;
            case '/two_factor_authentication/' :
                setTitle('Two-factor authentication');
                break;
            case '/two_factor_authentication_connect/' :
                setTitle('Two-factor authentication');
                break;
            default:
                setTitle('Wallet');
                break;
        }
    },[location])

    const [toggleMenu, setToggleMenu] = useState(false)
    const hidePopup = () => {
        setToggleMenu(false)
    }

    return (
        <div className={styles.header}>
            <Back />
            <span>{user?.username}</span>
            <p className={styles.walletTitle}>{title}</p>
            <button onClick={() => setToggleMenu(!toggleMenu)} className={styles.buttonOptionDark}>
                <span className={toggleMenu ? styles.dotsRotate : styles.dots}/>
            </button>
            <SettingsPopup toggleMenu={toggleMenu} hidePopup={hidePopup}/>
            <button className={!toggleMenu ? styles.header__close : styles.header__closeActive} onClick={hidePopup} />
        </div>
    )
}

export default Header;