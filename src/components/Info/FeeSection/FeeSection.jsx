import React, {useState} from "react";
import styles from '../Info.module.scss'
import {useFormik} from "formik";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {useSelector} from "react-redux";
import {getCurrency} from "../../../store/selectors";
import SelectCoin from "../../Сommon/Selects/SelectCoin";
import SelectNetwork from "../../Сommon/Selects/SelectNetwork";

const FeeSection = () => {
    const currency = useSelector(getCurrency);

    const [networkValue, setNetworkValue] = useState('');
    const [currentCoin, setCurrentCoin] = useState(currency[0]);


    const {handleSubmit, handleChange, values, setFieldValue} = useFormik({
        initialValues: {
            coin: 'USDT',
            network: '',
        },
    });
    return (
        <div className={styles.infoWrapper}>
            <form className={styles.send} onSubmit={handleSubmit}>
                <SelectCoin handleChange={handleChange} coin={values.coin}
                            currency={currency} setCurrentCoin={setCurrentCoin}/>

                <SelectNetwork currentCoin={currentCoin} networkValue={networkValue}
                               setFieldValue={setFieldValue} setNetworkValue={setNetworkValue} />
            </form>
        </div>
    )
}

export default FeeSection;