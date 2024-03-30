import styles from './Home.module.scss'
import React, {useEffect, useState} from "react";
import Balance from "./Balance/Balance";
import CardsList from "./Cards/CardsList";
import Links from "./Links/Links";
import Accordions from "./Accordions/Accordions";
import {useTelegram} from "../../hooks/useTelegram";
import {Html5QrcodeScanner} from 'html5-qrcode';
import Html5QrcodePlugin from "./Html5QrcodePlugin";

const Home = () => {
    const {user} = useTelegram();

    const onNewScanResult = (decodedText, decodedResult) => {
        console.log(decodedText);
        console.log(decodedResult);
    };

    return (
        <div>
            <Balance />
            <Html5QrcodePlugin
                fps={10}
                qrbox={250}
                disableFlip={false}
                qrCodeSuccessCallback={onNewScanResult}
            />
            <div className={styles.content}>
                <CardsList />
                <Links />
                <Accordions />
            </div>
        </div>
    )
}

export default Home;