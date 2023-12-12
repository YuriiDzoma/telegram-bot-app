import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {getProfileId, getReplenish} from "../../store/selectors";
import styles from './Replenish.module.scss';
import SelectCoin from "../Сommon/Selects/SelectCoin";
import SelectNetwork from "../Сommon/Selects/SelectNetwork";
import {useAppDispatch} from "../../hooks/redux";
import {CreateWallet, GetAddresses, getNetworks} from "../../api/api";
import {setReplenish} from "../../store/wallet-slice";
import AddressItem from "./AddressItem";
import Button from "../Сommon/Button/Button";
import {useTelegram} from "../../hooks/useTelegram";

const Replenish = () => {
    const dispatch = useAppDispatch();
    const currency = useSelector(getReplenish);
    const profileId = useSelector(getProfileId);
    const {user} = useTelegram();

    const [coin, setCoin] = useState(currency[0]);
    const [networkValue, setNetworkValue] = useState('');
    const [networkType, setNetworkType] = useState(null);
    const [addresses, setAddresses] = useState();


    const setCurrentCoin = (value) => {
        setNetworkType(null);
        setAddresses(null);
        setCoin(value);
    }

    useEffect(() => {
        getNetworks().then(response => dispatch(setReplenish(response)));
    },[])

    useEffect(() => {
        if (networkType && profileId) {
            GetAddresses(networkType, profileId).then(response => setAddresses(response));
        }
    }, [networkType])


    const {setSubmitting, handleSubmit, handleChange, values, isSubmitting, resetForm, setFieldValue} = useFormik({
        initialValues: {
            coin: '',
            network: '',
        },

        onSubmit: () => {
            if (networkType) {
                CreateWallet(networkType, user? user.id : 463697926).then(() => console.log('ok'))
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
                                   setFieldValue={setFieldValue} setNetworkValue={setNetworkValue} />
                )}
                {addresses && (
                    <div>
                        <p className={styles.addressWrapper__label}>Select address</p>
                        <div className={styles.addressWrapper}>
                            {addresses.map((item, index) => <AddressItem address={item.address} key={index} />)}
                        </div>
                    </div>
                )}
                <div className={styles.replenish__send}>
                    <button type='submit' disabled={!networkType || isSubmitting} className={styles.replenish__button}>
                        Create new wallet
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Replenish;