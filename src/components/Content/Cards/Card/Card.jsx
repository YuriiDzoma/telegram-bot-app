import React from "react";
import settings from '../../../../assets/icons/Settings.svg'

const card = {
    padding: '16px',
    backgroundColor: '#3E4449',
    borderRadius: '16px',
    border: '1px solid #2F353C',
    transition: 'all 0.2s'

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
        <div style={card}>
            <div style={cardSettings}>
                <button style={icon}><img src={settings} alt="settings"/></button>
            </div>
            <div style={cardValue}>
                <span style={current}>$ {value} </span>
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