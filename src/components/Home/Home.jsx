import styles from './Home.module.scss'
import React, {useEffect, useState} from "react";
import Balance from "./Balance/Balance";
import CardsList from "./Cards/CardsList";
import Links from "./Links/Links";
import Accordions from "./Accordions/Accordions";
import {useTelegram} from "../../hooks/useTelegram";
import {getUserInfo} from "../../api/api";

const Home = () => {
    const [data, setData] = useState('');
    const {user} = useTelegram();
    // if (user) {
    //     getUserInfo(user.id).then(response => console.log(response))
    // }
    useEffect(() => {
        getUserInfo().then((response) => setData(response))
    }, [])


    return (
        <div>
            <p>{data ? data.user?.user_name : user?.id}</p>
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