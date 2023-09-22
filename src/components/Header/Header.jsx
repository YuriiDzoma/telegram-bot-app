import React from "react";
import Button from "../Button/button";

const Header = (props) => {
    const telegram = window.Telegram.WebApp;

    const closeTelegram = () => {
        telegram.close();
    }

    return (
        <div className={'header'}>
            <Button onClick={closeTelegram}>Закрити</Button>
            <span className={'username'}>{telegram.initDataUnsafe?.user?.username}</span>
        </div>
    )
}

export default Header;