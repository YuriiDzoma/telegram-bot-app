import React, {useEffect} from "react";
import styles from './button.module.scss'
import {useTelegram} from "../../hooks/useTelegram";

const Back = () => {
    const {telegram, onToggleButton} = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, [])

    const theme = telegram.colorScheme;

    return (
        <button className={theme === 'dark' ? styles.backBlack : styles.backLight}/>
    )
}

export default Back;