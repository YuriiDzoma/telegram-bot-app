import React, {useEffect} from "react";
import styles from './button.module.scss'
import {useTelegram} from "../../hooks/useTelegram";
import { useNavigate } from 'react-router-dom';

const Back = () => {
    const {telegram} = useTelegram();
    const navigate = useNavigate();

    useEffect(() => {
        telegram.ready();
    }, [])

    const theme = telegram.colorScheme;

    return (
        <button className={theme === 'dark' ? styles.backDark : styles.backLight}
                onClick={() => navigate(-1)}
        />
    )
}

export default Back;