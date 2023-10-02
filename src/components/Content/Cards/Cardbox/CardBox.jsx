import React from "react";

const myStyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
};

const CardBox = ({value, number, code, date, type}) => {

    const cardBox = {
        padding: '16px',
        backgroundColor: '#3E4449',
        boxShadow: '0 0 13px 0 #0C0B0B26',
        marginTop: '16px',
    }

    return (
        <div style={cardBox}>
            <div>
                <button>O</button>
            </div>
            <p>
                <span>{value} </span>
                /
                <span> 5000</span>
            </p>
            <div>
                <p>{number}</p>
                <p>{code}</p>
            </div>
            <div>
                <p>{date}</p>
                <p>{type}</p>
            </div>
        </div>
    )
}

export default CardBox;