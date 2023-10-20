import React, {useState} from "react";
import styles from './Send.module.scss'
import {useFormik} from "formik";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "../Сommon/Button/Button";
import copy from '../../assets/icons/copy.svg';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Notification from "./Notification";
import {useSelector} from "react-redux";
import {getNetworks} from "../../store/selectors";

const Send = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [mainText, setMainText] = useState('');
    const [secondText, setSecondText] = useState('');
    const [success, setSuccess] = useState(true);
    const [networkValue, setNetworkValue] = useState('');

    const networks = useSelector(getNetworks);

    const availableBalance = 28631213;

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

    const {setSubmitting, handleSubmit, isSubmitting, handleChange, values, resetForm, setFieldValue} = useFormik({
        initialValues: {
            coin: 'USDT',
            address: 'TFpzUX5aUf6NVW39yhDaphEsoypGwg6',
            network: 'Tron (TRC20)',
            amount: 0,
        },

        onSubmit: (values) => {
            console.log(values);
            setSubmitting(false);
            resetForm();
        },
    });

    return (
        <div className={styles.sendWrapper}>
            <form className={styles.send} onSubmit={handleSubmit}>
                <Notification showPopup={showPopup} mainText={mainText}
                              secondText={secondText} success={success} closerPopup={setShowPopup}/>
                <label className={styles.send__label} htmlFor={`coin`}>Select a coin</label>
                <FormControl className={styles.send__select} sx={{m: 1, minWidth: 120}}>
                    <Select
                        value={values.coin}
                        onChange={handleChange}
                        displayEmpty
                        id="coin"
                        name="coin"
                        inputProps={{'aria-label': 'Without label'}}
                        className={`${styles.inputBox__button} send-select`}
                    >
                        <MenuItem value={'USDT'}>USDT</MenuItem>
                        <MenuItem value={'BTC'}>BTC</MenuItem>
                        <MenuItem value={'EU'}>EU</MenuItem>

                    </Select>
                </FormControl>

                <label className={styles.send__label} htmlFor={`address`}>Address</label>
                <div className={styles.addressBox}>
                    <input
                        className={styles.send__input}
                        id="address"
                        name="address"
                        type="text"
                        onChange={handleChange}
                        value={values.address}
                        placeholder={''}
                    />
                    <CopyToClipboard className={styles.addressBox__copy} text={values.address}>
                        <button onClick={() => copyText(values.address)} type='button'><img src={copy} alt="copy"/>
                        </button>
                    </CopyToClipboard>
                </div>

                <label className={styles.send__label} htmlFor={`network`}>Network selection</label>
                <FormControl className={styles.send__select} sx={{m: 1,}}>
                    <Select
                        value={networkValue}
                        onChange={() => setFieldValue('network', networkValue)}
                        displayEmpty
                        id="network"
                        name="network"
                        inputProps={{'aria-label': 'Without label'}}
                        className={`${styles.inputBox__button} send-select network-select`}
                    >
                        {networks.map((network, index) =>
                            <MenuItem key={index} className='networkItem'
                                      value={network.name} onClick={() => setNetworkValue(network.name)}><div>
                                <p className='network-name'>{network.name}</p>
                                <p className='network-text'>{network.commission}</p>
                                <p className='network-text'>{network.minAmount}</p>
                            </div></MenuItem>)}
                    </Select>
                </FormControl>
                <div className={styles.send__networkText}>
                    <span>Fee: 15.0 TRX</span>
                </div>

                <div className={styles.amountBox}>
                    <label className={styles.send__label} htmlFor={`address`}>Amount</label>
                    <span className={styles.amountBox__minimum}>min: 100 USDT</span>
                </div>
                <div className={styles.addressBox}>
                    <input
                        className={styles.send__input}
                        id="amount"
                        name="amount"
                        type="number"
                        onChange={handleChange}
                        value={values.amount}
                        placeholder={''}
                    />
                    <button onClick={() => setFieldValue('amount', availableBalance)} type='button'
                            className={styles.send__all}>All
                    </button>

                </div>
                <div className={styles.send__networkText}>
                    <span>Available Balance: ${availableBalance}</span>
                </div>
                <div className={styles.send__send}>
                    <Button type="submit" disabled={isSubmitting}>
                        <span>Withdraw</span>
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default Send;