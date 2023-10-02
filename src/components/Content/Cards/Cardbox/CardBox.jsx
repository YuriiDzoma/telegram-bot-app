import React from "react";
import './CardBox.css';

const CardBox = ({value, number, code, date, type}) => {
    return (
        <div className={'card'}>
            <div className={'cardSettings'}>
                <button>O</button>
            </div>
            <p className={'cardValue'}>
                <span className={'cardValue__current'}>{value} </span>
                /
                <span className={'cardValue__limit'}> 5000</span>
            </p>
            <div className={'cardNumber'}>
                <p>{number}</p>
                <p>{code}</p>
            </div>
            <div className={'cardDate'}>
                <p>{date}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default CardBox;