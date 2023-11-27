import styles from './Home.module.scss'
import React from "react";
import Balance from "./Balance/Balance";
import CardsList from "./Cards/CardsList";
import Links from "./Links/Links";
import Accordions from "./Accordions/Accordions";
import {useTelegram} from "../../hooks/useTelegram";

const Home = () => {
    const {user} = useTelegram();
    if (user) {
        getUserInfo(user.id).then(response => console.log(response))
    }

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