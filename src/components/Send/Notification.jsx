import React from "react";
import styles from './Send.module.scss';
import close from '../../assets/icons/Close.svg'

const Notification = ({showPopup=false, mainText, secondText, success, closerPopup}) => {
    return (
        <div className={!showPopup ? styles.notificationHide : styles.notification}>
            <p className={success ? styles.notification__mainText : styles.notification__mainTextFailed}>{mainText}</p>
            <p className={styles.notification__secondText}>{secondText}</p>
            <button type='button' onClick={() => closerPopup(false)} className={styles.notification__close}>
                <img className={styles.notification__closeIcon} src={close} alt="close"/>
            </button>
        </div>
    )
}

export default Notification;