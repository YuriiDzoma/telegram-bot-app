import React from "react";
import styles from './Links.module.scss';
import add from '../../../assets/icons/Add.svg';
import check from '../../../assets/icons/Check.svg';
import exchange from '../../../assets/icons/Exchange.svg';
import send from '../../../assets/icons/Send.svg';
import LinkPage from "./LinkPage/LinkPage";

const Links = () => {
    const pages = [
        {url: 'replenish/', icon: add, name: 'Replenish'},
        {url: 'limit_orders/', icon: check, name: 'Limit orders'},
        {url: 'exchange/', icon: exchange, name: 'Exchange'},
        {url: 'send/', icon: send, name: 'Send'},
    ]
    return (
        <div className={styles.navigation}>
            {pages && (
                pages.map((page) => <LinkPage link={page.url} icon={page.icon} name={page.name} />)
            )}
        </div>
    )
}

export default Links;