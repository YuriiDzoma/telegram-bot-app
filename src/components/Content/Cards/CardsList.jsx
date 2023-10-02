import React from "react";
import {useSelector} from "react-redux";


const CardsList = () => {

    const allCards = useSelector(state => state.wallet.cards);

    return (
        <div>
            {allCards.map((card, index) => <p key={index}>{card.cardValue}</p> )}
        </div>
    )
}

export default CardsList;