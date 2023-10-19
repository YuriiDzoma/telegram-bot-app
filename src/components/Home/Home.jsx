import styles from './Home.module.scss'
import React from "react";
import Balance from "./Balance/Balance";
import CardsList from "./Cards/CardsList";
import Links from "./Links/Links";
import Accordions from "./Accordions/Accordions";

const Home = () => {
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