import React, {useState} from "react";
import styles from './Replenish.module.scss';
import qrIcon from '../../assets/icons/QrCode.svg'
import CopyInput from "../Сommon/CopyInput/CopyInput";
import copy from "../../assets/icons/copy.svg";
import {CopyToClipboard} from "react-copy-to-clipboard";
import Notification from "../Send/Notification";


const AddressItem = ({address}) => {
    const [showPopup, setShowPopup] = useState(false);
    const [mainText, setMainText] = useState('');
    const [secondText, setSecondText] = useState('');
    const [success, setSuccess] = useState(true);

    const closerPopup = () => {
        setTimeout(() => {
            setShowPopup(false);
            setMainText('');
            setSecondText('');
        }, 5000)
    }

    const copyText = (value) => {
        if (value && value !== '') {
            setShowPopup(true);
            setMainText('Copy Address');
            setSecondText('Your address was copped');
            closerPopup();
        } else {
            setSuccess(false);
        }
    }
    return (
        <div className={styles.address}>
            <Notification showPopup={showPopup} mainText={mainText}
                          secondText={secondText} success={success} closerPopup={setShowPopup}/>
            <p className={styles.address__code}>{address}</p>
            <div className={styles.address__actions}>
                <button type='button' className={styles.address__qr}><img src={qrIcon} alt=""/></button>
                <CopyToClipboard className={styles.addressBox__copy} text={address}>
                    <button onClick={() => copyText(address)} type='button'><img src={copy} alt="copy"/>
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default AddressItem;