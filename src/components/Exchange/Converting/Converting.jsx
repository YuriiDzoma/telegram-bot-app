import React, {useState} from "react";
import styles from './Converting.module.scss'
import {useFormik} from "formik";
import ExchangeRate from "./ExchangeRate";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import './Converting.css'
import Button from "../../Сommon/Button/Button";
import {useSelector} from "react-redux";
import {getCurrency} from "../../../store/selectors";

const Converting = ({order=false}) => {
    const currency = useSelector(getCurrency);
    const [currentCoin, setCurrentCoin] = useState(currency[0]);

    const {setSubmitting, handleSubmit, isSubmitting, handleChange, values, resetForm} = useFormik({
        initialValues: {
            from: '',
            to: '',
            from_currency: 'USDT',
            to_currency: '',
            price: '',
        },

        onSubmit: (values) => {
            if (values.from !== '') {
                console.log(values);
                setSubmitting(false);
                resetForm();
            }

        },
    });
    return (
        <form className={styles.ConvertingWrapper} onSubmit={handleSubmit}>
            <div className={styles.converting__head}>
                <label className={styles.converting__label} htmlFor={`from`}>{order ? 'Sell' : 'From'}</label>
                <span className={styles.converting__minimum}>min: 100 USDT</span>
            </div>
            <div className={`${styles.inputBox} parent-input`}>
                <input
                    className={styles.converting__input}
                    id="from"
                    name="from"
                    type="number"
                    onChange={handleChange}
                    value={values.from}
                    placeholder={''}
                />
                <FormControl className={styles.inputBox__select} sx={{m: 1, minWidth: 120}}>
                    <Select
                        value={values.from_currency}
                        onChange={handleChange}
                        displayEmpty
                        id="from_currency"
                        name="from_currency"
                        inputProps={{'aria-label': 'Without label'}}
                        className={styles.inputBox__button}
                    >
                        {currency.map((item, index) =>
                            <MenuItem onClick={() => setCurrentCoin(item)} key={index} value={item.token_name}>{item.token_name}</MenuItem>)}

                    </Select>
                </FormControl>
            </div>

            <span className={styles.converting__balance}>Available Balance: $15556</span>

            {order && (
                <div className={styles.price}>
                    <label className={styles.converting__label} htmlFor={`to`}>Price</label>
                    <input
                        className={styles.converting__input}
                        id="price"
                        name="price"
                        type="number"
                        onChange={handleChange}
                        value={values.price}
                        placeholder={''}
                    />
                </div>
            )}

            <label className={styles.converting__label} htmlFor={`to`}>{order ? 'Buy' : 'To'}</label>
            <div className={styles.inputBox}>
                <input
                    className={styles.converting__input}
                    id="to"
                    name="to"
                    type="number"
                    onChange={handleChange}
                    value={values.to}
                    placeholder={''}
                />
                <FormControl className={styles.inputBox__select} sx={{m: 1,}}>
                    <Select
                        value={values.to_currency}
                        onChange={handleChange}
                        displayEmpty
                        id="to_currency"
                        name="to_currency"
                        inputProps={{'aria-label': 'Without label'}}
                        className={styles.inputBox__button}
                    >
                        {currentCoin.change.map((item, index) =>
                            <MenuItem key={index} value={item}>{item}</MenuItem>)}
                    </Select>
                </FormControl>
            </div>
            <div className={styles.converting__commission}>
                <span>Commission: 0.02%</span>
                <a className={styles.converting__commissionLink} href="#">Learn more</a>
            </div>
            <ExchangeRate/>
            <div className={styles.converting__send}>
                <Button type="submit" disabled={isSubmitting}>
                    <span>Exchange</span>
                </Button>
            </div>
        </form>
    )
}

export default Converting;