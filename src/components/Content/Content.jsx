import './Content.module.scss'
import React from "react";
import Balance from "./Balance/Balance";
import CardsList from "./Cards/CardsList";

const Content = () => {
    return (
        <div>
            <Balance />
            {/*<CardsList />*/}
            <span>TEST</span>
        </div>

    )
}

export default Content;