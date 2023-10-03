import './Content.module.scss'
import React from "react";
import Balance from "./Balance/Balance";
import CardsList from "./Cards/CardsList";
import Links from "./Links/Links";
import Accordions from "./Accordions/Accordions";

const Content = () => {
    return (
        <div>
            <Balance />
            <CardsList />
            <Links />
            <Accordions />
        </div>
    )
}

export default Content;