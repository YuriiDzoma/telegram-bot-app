import React, {useEffect, useState} from "react";
import styles from './Header.module.scss'
import {useTelegram} from "../../hooks/useTelegram";
import Back from "../Button/Back";
import {useLocation} from "react-router";

const Header = ({theme}) => {
    const [title, setTitle] = useState('Wallet')
    const {closeTelegram, user} = useTelegram();
    const location = useLocation().pathname;

    console.log(title);

    useEffect(() => {
        switch (location) {
            case '/' :
                setTitle('Wallet');
                console.log('Wallet')
                break;
            case '/replenish/' :
                setTitle('Replenish');
                console.log('Replenish')
                break;
            case '/limit_orders/' :
                setTitle('Limit Orders');
                console.log('Limit Orders')
                break;
            case '/exchange/' :
                setTitle('Exchange');
                console.log('Exchange')
                break;
            case '/send/' :
                setTitle('Send');
                console.log('Send')
                break;
            default:
                setTitle('Wallet');
                console.log('Wallet')
                break;
        }
    },[location])


    return (
        <div className={styles.header}>
            <Back />
            <p className={styles.walletTitle}>{title}</p>
            <button className={theme === 'dark' ? styles.buttonOptionDark : styles.buttonOptionLight}>
                <span className={styles.dots}/>
            </button>

            {/*<Button onClick={closeTelegram}>Закрити</Button>*/}
            {/*<span className={'username'}>{user?.username}</span>*/}
        </div>
    )
}

export default Header;