import React from "react";
import styles from './Converting.module.scss'
import {useFormik} from "formik";
import ExchangeRate from "./ExchangeRate";

const Converting = () => {
    const { setSubmitting, handleSubmit, isSubmitting, handleChange, values, resetForm } = useFormik({
        initialValues: {
            from: '',
            to: '',
        },

        onSubmit: (values) => {
            console.log(values);
            setSubmitting(false);
            resetForm();
        },
    });
    return (
        <form className={styles.ConvertingWrapper} onSubmit={handleSubmit}>
            <div className={styles.converting__head}>
                <label className={styles.converting__label} htmlFor={`from`}>From</label>
                <span className={styles.converting__minimum}>min: 100 USDT</span>
            </div>
            <input
                className={styles.converting__input}
                id="from"
                name="from"
                type="number"
                onChange={handleChange}
                value={values.from}
                placeholder={''}
            />
            <span className={styles.converting__balance}>Available Balance: $15556</span>
            <label className={styles.converting__label} htmlFor={`from`}>To</label>
            <input
                className={styles.converting__input}
                id="from"
                name="from"
                type="number"
                onChange={handleChange}
                value={values.from}
                placeholder={''}
            />
            <div className={styles.converting__commission}>
                <span>Commission: 0.02%</span>
                <a className={styles.converting__commissionLink} href="#">Learn more</a>
            </div>
            <ExchangeRate />
        </form>
    )
}

export default Converting;