import React, {useEffect, useState} from "react";
import styles from './Send.module.scss'
import {useFormik} from "formik";
import Button from "../Сommon/Button/Button";
import {useSelector} from "react-redux";
import {getReplenish} from "../../store/selectors";
import CopyInput from "../Сommon/CopyInput/CopyInput";
import SelectCoin from "../Сommon/Selects/SelectCoin";
import SelectNetwork from "../Сommon/Selects/SelectNetwork";
import {getNetworks} from "../../api/api";
import {setReplenish} from "../../store/wallet-slice";
import {useAppDispatch} from "../../hooks/redux";

const Send = () => {
    const dispatch = useAppDispatch();
    const currency = useSelector(getReplenish);
    const code = 'TFpzUX5aUf6NVW39yhDaphEsoypGwg6';
    const availableBalance = 2868973;

    const [networkValue, setNetworkValue] = useState('');
    const [currentCoin, setCurrentCoin] = useState(currency[0]);

    useEffect(() => {
        getNetworks().then(response => dispatch(setReplenish(response)));
    },[])


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

                <div className={styles.send__formBox}>
                    {currency && (
                        <SelectCoin handleChange={handleChange} coin={values.coin}
                                    currency={currency} setCurrentCoin={setCurrentCoin}/>
                    )}
                    {currency && (
                        <SelectNetwork currentCoin={currentCoin} networkValue={networkValue}
                                       setFieldValue={setFieldValue} setNetworkValue={setNetworkValue} />
                    )}

                </div>

                <CopyInput code={code} label={'Address'} />

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
                <div className={styles.send__balanceText}>
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