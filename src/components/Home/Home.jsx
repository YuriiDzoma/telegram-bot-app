import styles from './Home.module.scss'
import React, {useEffect, useState} from "react";
import Balance from "./Balance/Balance";
import CardsList from "./Cards/CardsList";
import Links from "./Links/Links";
import Accordions from "./Accordions/Accordions";
import {useTelegram} from "../../hooks/useTelegram";

const Home = () => {
    const [data, setData] = useState('');
    const {user} = useTelegram();


    return (
        <div>
            <Balance />
            <div className={styles.content}>
                <CardsList />
                <Links />
                <Accordions />
            </div>
        </div>
    )
}

export default Home;