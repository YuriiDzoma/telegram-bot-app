import React, {useEffect, useState} from "react";
import styles from '../Info.module.scss'
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {getReplenish} from "../../../store/selectors";
import SelectCoin from "../../Сommon/Selects/SelectCoin";
import SelectNetwork from "../../Сommon/Selects/SelectNetwork";
import {useAppDispatch} from "../../../hooks/redux";
import {getNetworks} from "../../../api/api";
import {setReplenish} from "../../../store/wallet-slice";

const FeeSection = () => {
    const dispatch = useAppDispatch();
    const currency = useSelector(getReplenish);

    console.log(currency)

    const [networkValue, setNetworkValue] = useState('');
    const [currentCoin, setCurrentCoin] = useState(currency[0]);

    useEffect(() => {
        getNetworks().then(response => dispatch(setReplenish(response)));
    },[])

    const {handleSubmit, handleChange, values, setFieldValue} = useFormik({
        initialValues: {
            coin: 'USDT',
            network: '',
        },
    });
    return (
        <div className={styles.infoWrapper}>
            <form className={styles.send} onSubmit={handleSubmit}>
                {currency && (
                    <SelectCoin handleChange={handleChange} coin={values.coin}
                                currency={currency} setCurrentCoin={setCurrentCoin}/>
                )}
                {currency && (
                    <SelectNetwork currentCoin={currentCoin} networkValue={networkValue}
                                   setFieldValue={setFieldValue} setNetworkValue={setNetworkValue} />
                )}
            </form>
        </div>
    )
}

export default FeeSection;