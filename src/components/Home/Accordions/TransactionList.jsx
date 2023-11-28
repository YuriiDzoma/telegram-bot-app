import React from "react";
import {useSelector} from "react-redux";
import {getTransactionHistory} from "../../../store/selectors";
import styles from './Transaction.module.scss'
import Transaction from "./Transaction";


const TransactionList = () => {
    const transactionHistory = useSelector(getTransactionHistory);
    
    return (
        <>
            {transactionHistory && (
                transactionHistory.map((item, index) => <Transaction
                    key={index}
                    icon={item.icon}
                    amount={item.amount}
                    date_create={item.date_create}
                    token={item.token}
                    table_name={item.table_name}
                />))}
        </>
    )
}

export default TransactionList;