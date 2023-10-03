import './Content.module.scss'
import React from "react";
import Balance from "./Balance/Balance";
import CardsList from "./Cards/CardsList";
import Links from "./Links/Links";

const Content = () => {
    return (
        <div>
            <Balance />
            <CardsList />
            <Links />
        </div>
    )
}

export default Content;