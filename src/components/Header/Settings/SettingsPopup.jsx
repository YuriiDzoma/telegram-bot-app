import React from "react";
import styles from './Settings.module.scss'
import {Link} from "react-router-dom";

const SettingsPopup = ({toggleMenu, hidePopup}) => {
    const logout = () => {
        console.log('logout')
    }

    const hideMenu = () => {
        hidePopup();
    }

    return (
        <div className={toggleMenu ? styles.settingsPopupShow : styles.settingsPopup}>
            <span onClick={hideMenu} className={toggleMenu ? styles.linkShow : styles.link}>Profile</span>
            <Link onClick={hideMenu} className={toggleMenu ? styles.linkShow : styles.link} to={'/info/'}>Info</Link>
            <Link onClick={hideMenu} className={toggleMenu ? styles.linkShow : styles.link} to={'/settings/'}>Settings</Link>
            <button className={toggleMenu ? styles.linkShow : styles.link} onClick={() => logout()}>Logout</button>
        </div>
    )
}

export default SettingsPopup;