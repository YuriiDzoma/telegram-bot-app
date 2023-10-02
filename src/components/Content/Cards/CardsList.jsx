import React from "react";
import {getCards} from "../../../store/selectors";
import {useSelector} from "react-redux";
import Card from "./Card";

const CardsList = () => {

    const allCards = useSelector(getCards);

    return (
        <div>
            TEST
        </div>
    )
}

export default CardsList;