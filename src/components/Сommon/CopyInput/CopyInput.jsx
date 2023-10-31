import React, {useState} from "react";
import styles from "../../Settings/Settings.module.scss";
import {CopyToClipboard} from "react-copy-to-clipboard";
import copy from "../../../assets/icons/copy.svg";
import Notification from "../../Send/Notification";


const CopyInput = ({code, label}) => {
    const [change, setChange] = useState(code);
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
        <>
            <Notification showPopup={showPopup} mainText={mainText}
                          secondText={secondText} success={success} closerPopup={setShowPopup}/>
            <label className={styles.send__label} htmlFor={`address`}>{label}</label>
            <div className={styles.addressBox}>
                <input
                    className={styles.send__input}
                    id="code"
                    name="code"
                    type="text"
                    onChange={setChange}
                    value={change}
                    placeholder={''}
                    readOnly="readonly"
                />
                <CopyToClipboard className={styles.addressBox__copy} text={change}>
                    <button onClick={() => copyText(change)} type='button'><img src={copy} alt="copy"/>
                    </button>
                </CopyToClipboard>
            </div>
        </>
    )
}

export default CopyInput;