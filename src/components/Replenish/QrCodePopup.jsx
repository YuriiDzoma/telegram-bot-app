import * as React from "react";
import styles from './Replenish.module.scss';
import close from '../../assets/icons/Close.svg'
import {useState} from "react";
import CopyInput from "../Сommon/CopyInput/CopyInput";

const QrCodePopup = ({qrCode, walletAddress, hidePopup}) => {

    return (
        <>
            <div className={styles.walletPopup}>
                <div className={styles.walletPopup__header}>
                    <span>QR code</span>
                    <button onClick={() => hidePopup()}><img src={close} alt=""/></button>
                </div>
                {qrCode && (
                    <div className={styles.walletPopup__qrCodeBox}>
                        <img className={styles.walletPopup__qrCode} src={qrCode} alt="QR CODE"/>
                    </div>
                )}
                {walletAddress && (
                    <div className={styles.walletPopup__address}>
                        <CopyInput code={walletAddress} label={'Address'} />
                    </div>
                )}
            </div>
        </>

    )
}

export default QrCodePopup;