import React from "react";
import styles from './Settings.module.scss'
import {Link} from "react-router-dom";

const SettingsPopup = ({toggleMenu}) => {
    const logout = () => {
        console.log('logout')
    }
    return (
        <div className={toggleMenu ? styles.settingsPopupShow : styles.settingsPopup}>
            <span className={toggleMenu ? styles.linkShow : styles.link}>Profile</span>
            <Link className={toggleMenu ? styles.linkShow : styles.link} to={'/info'}>Info</Link>
            <Link className={toggleMenu ? styles.linkShow : styles.link} to={'/settings'}>Settings</Link>
            <button className={toggleMenu ? styles.linkShow : styles.link} onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default SettingsPopup;