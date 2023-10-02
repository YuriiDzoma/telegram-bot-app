import React from "react";
import {useSelector} from "react-redux";
import Card from "./Card";

const CardsList = () => {

    const allCards = useSelector(state => state.wallet.cards);

    return (
        <div>
            test
        </div>
    )
}

export default CardsList;