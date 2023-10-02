import React from "react";

const cardBox = {
    padding: '16px',
    backgroundColor: '#3E4449',
    boxShadow: '0 0 13px 0 #0C0B0B26',
    marginTop: '16px',
    borderRadius: '16px',
    border: 'Mixed solid #2F353C'
}
const cardSettings = {
    display: 'flex',
    justifyContent: 'end',
    marginBottom: '8px',
}
const icon = {
    height: '16px',
    width: '16px',
}
const cardValue = {
    fontSize: '22px',
    fontWeight: '600',
    color: '#CED0D6',
    marginBottom: '16px',
}
const current = {
    color: '#FD2222'
}
const limit = {
    color: '#1ABA2A'
}
const cardNumber = {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px'
}
const cardDate = {
    display: 'flex',
    justifyContent: 'space-between',
    height: '31px'
}
const text = {
    fontSize: '14px',
    color: '#CED0D6'
}

const CardBox = ({value, number, code, date, type}) => {

    return (
        <div style={cardBox}>
            <div style={cardSettings}>
                <button style={icon}>O</button>
            </div>
            <div style={cardValue}>
                <span style={current}>{value} </span>
                /
                <span style={limit}> 5000</span>
            </div>
            <div style={cardNumber}>
                <p style={text}>{number}</p>
                <p style={text}>{code}</p>
            </div>
            <div style={cardDate}>
                <p style={text}>{date}</p>
                <p style={text}>{type}</p>
            </div>
        </div>
    )
}

export default CardBox;