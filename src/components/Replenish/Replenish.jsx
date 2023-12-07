import React, {useEffect, useState} from "react";
import {useFormik} from "formik";
import {useSelector} from "react-redux";
import {getReplenish} from "../../store/selectors";
import styles from './Replenish.module.scss';
import SelectCoin from "../Сommon/Selects/SelectCoin";
import SelectNetwork from "../Сommon/Selects/SelectNetwork";
import {useAppDispatch} from "../../hooks/redux";
import {getNetworks} from "../../api/api";


const Replenish = () => {
    const dispatch = useAppDispatch();
    const currency = useSelector(getReplenish);

    const [networkValue, setNetworkValue] = useState('');
    const [currentCoin, setCurrentCoin] = useState(currency[0]);

    useEffect(() => {
        getNetworks().then(response => console.log(response))
    })

    const {setSubmitting, handleSubmit, handleChange, values, resetForm, setFieldValue} = useFormik({
        initialValues: {
            coin: 'USDT',
            network: '',
        },

        onSubmit: (values) => {
            console.log(values);
            setSubmitting(false);
            resetForm();
        },
    });

    return (
        <div className={styles.replenishWrapper}>
            <form className={styles.replenish} onSubmit={handleSubmit}>
                <SelectCoin handleChange={handleChange} coin={values.coin}
                            currency={currency} setCurrentCoin={setCurrentCoin}/>
                <SelectNetwork currentCoin={currentCoin} networkValue={networkValue}
                               setFieldValue={setFieldValue} setNetworkValue={setNetworkValue} />
            </form>
        </div>
    )
}

export default Replenish;