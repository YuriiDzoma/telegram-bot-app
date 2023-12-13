import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {getProfileId, getReplenish} from "../../store/selectors";
import styles from './Replenish.module.scss';
import SelectCoin from "../Сommon/Selects/SelectCoin";
import SelectNetwork from "../Сommon/Selects/SelectNetwork";
import {useAppDispatch} from "../../hooks/redux";
import {createWallet, getAddresses, getNetworks, getQrCode} from "../../api/api";
import {setReplenish} from "../../store/wallet-slice";
import AddressItem from "./AddressItem";
import {useTelegram} from "../../hooks/useTelegram";
import QrCodePopup from "./QrCodePopup";

const Replenish = () => {
    const dispatch = useAppDispatch();
    const currency = useSelector(getReplenish);
    const profileId = useSelector(getProfileId);
    const {user} = useTelegram();

    const [coin, setCoin] = useState(null);
    const [networkValue, setNetworkValue] = useState('');
    const [networkType, setNetworkType] = useState(null);
    const [addresses, setAddresses] = useState();
    const [qrCode, setQrCode] = useState(null);
    const [walletAddress, setWalletAddress] = useState(null);
    const [showPopup, setShowPopup] = useState(null);

    const hidePopup = () => {
        setShowPopup(null);
        setWalletAddress(null);
        setQrCode(null);
        setAddresses(null);
        setNetworkType(null);
        setNetworkValue('');
        setCoin(null);
    }

    const setCurrentCoin = (value) => {
        setNetworkType(null);
        setAddresses(null);
        setCoin(value);
    }

    useEffect(() => {
        getNetworks().then(response => dispatch(setReplenish(response)));
    }, [])

    useEffect(() => {
        if (networkType && profileId) {
            getAddresses(networkType, profileId).then(response => setAddresses(response));
        }
    }, [networkType])

    const getCode = (address) => {
        getQrCode(address, networkType).then(response => {
            console.log(response);
            setQrCode(response.qr_code);
            setWalletAddress(response.address);
            setShowPopup('QR code');
        })
    }


    const {setSubmitting, handleSubmit, handleChange, values, isSubmitting, setFieldValue} = useFormik({
        initialValues: {
            coin: '',
            network: '',
        },

        onSubmit: () => {
            if (networkType) {
                createWallet(networkType, user ? user.id : 463697926).then((response) => {
                    setQrCode(response.qr_code);
                    setWalletAddress(response.address);
                    setShowPopup('Wallet created');
                })
            }
            setSubmitting(false);
            // resetForm();
            // setNetworkType(null);
            // setAddresses(null);
        },
    });

    return (
        <div className={styles.replenishWrapper}>
            <form className={styles.replenish} onSubmit={handleSubmit}>
                {currency && (
                    <SelectCoin handleChange={handleChange} coin={values.coin}
                                currency={currency} setCurrentCoin={setCurrentCoin}/>
                )}
                {currency && (
                    <SelectNetwork currentCoin={coin} networkValue={networkValue} setNetworkType={setNetworkType}
                                   setFieldValue={setFieldValue} setNetworkValue={setNetworkValue}/>
                )}
                {addresses && (
                    <div>
                        <p className={styles.addressWrapper__label}>Select address</p>
                        <div className={styles.addressWrapper}>
                            {addresses.map((item, index) => <AddressItem getCode={getCode} address={item.address} key={index}/>)}
                        </div>
                    </div>
                )}
                <div className={styles.replenish__send}>
                    <button type='submit' disabled={!networkType || isSubmitting} className={styles.replenish__button}>
                        Create new wallet
                    </button>
                </div>
            </form>
            {qrCode && walletAddress && (
                <QrCodePopup qrCode={qrCode} walletAddress={walletAddress} hidePopup={hidePopup} text={showPopup} />
            )}
            {qrCode && walletAddress && (
                <button className={!showPopup ? styles.walletPopup__close : styles.walletPopup__closeActive}
                        onClick={hidePopup}/>
            )}
        </div>
    )
}

export default Replenish;