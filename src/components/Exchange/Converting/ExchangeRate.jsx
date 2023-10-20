import React from "react";
import styles from './Converting.module.scss'
import refresh from '../../../assets/icons/refresh.svg'

const ExchangeRate = () => {
    return (
        <div className={styles.exchangeRate}>
            <p className={styles.exchangeRate__text}>Rate at the moment</p>
            <div className={styles.exchangeRate__content}>
                <p className={styles.exchangeRate__contentValue}>$ 1.00 = 0.00009 BTC</p>
                <button type='button' className={styles.exchangeRate__contentButton}><img src={refresh} alt="refresh"/></button>
            </div>
            <div className={styles.exchangeRate__timeRefresh}>
                <p>Please kindly note, the price and estimated amounts are indicative and based on last executed trade.
                    It does not guarantee by any means that your order will be executed at this indicative price.
                    The results of the operation will be based on market conditions (the supply and demand interchange)
                    at execution time</p>
                <p>Time to come to terms: 10 second</p>
            </div>
        </div>
    )
}

export default ExchangeRate;