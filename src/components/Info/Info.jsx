import React from "react";
import styles from './Info.module.scss'
import {Link} from "react-router-dom";

const Info = () => {
    return (
        <div className={styles.infoWrapper}>
            <Link className={styles.language} to={'/fee_section/'}>Fee section</Link>
            <Link className={styles.language} to={'/terms_and_conditions/'}>Terms and conditions</Link>
        </div>
    )
}

export default Info;