import React, {useState} from "react";
import styles from '../Settings.module.scss'
import {Link} from "react-router-dom";
import CopyInput from "../../Сommon/CopyInput/CopyInput";
import Button from "../../Сommon/Button/Button";

const TwoFactorAuth = () => {
    const code = 'csak32FAnc4Ssj7a';
    const [showPopup, setShowPopup] = useState(false);
    const hidePopup = () => {
        setShowPopup(false)
    }

    return (
        <div className={styles.settingsWrapper}>
            <div className={styles.authInfo}>
                <p className={styles.authInfo__text}>
                    In the Google Authenticator app on your mobile device, enter your 16-digit secret key
                </p>
                <p className={styles.authInfo__text}>
                    In the Google Authenticator app on your mobile device, enter your 16-digit secret keyImportant: for your safety, we recommend using the Delete button below to delete this secret key from your message history.
                </p>
                <p className={styles.authInfo__text}>
                    The secret key can be obtained again by selecting the main menu item Settings -> Two-factor authentication -> Google Auth activation code
                </p>

                <CopyInput code={code} label={'Copy your secret key'} />
                <div className={styles.send__send}>
                    <button onClick={() => setShowPopup(true)} type="button" >
                        <span>Connect</span>
                    </button>
                </div>
            </div>
            <div className={showPopup ? styles.codeBox__active : styles.codeBox}>
                <span className={styles.codeBox__title}>Enter your code</span>
                <input className={styles.codeBox__input} type="number" />
                <button className={styles.codeBox__button} onClick={() => console.log('apply')} type="button" >
                    <span>Apply</span>
                </button>
            </div>
            <button className={!showPopup ? styles.codeBox__close : styles.codeBox__closeActive} onClick={hidePopup} />
        </div>
    )
}

export default TwoFactorAuth;