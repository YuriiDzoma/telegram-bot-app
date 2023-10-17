import './App.module.scss';
import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import styles from './App.module.scss';
import {useTelegram} from "./hooks/useTelegram";
import {Routes, Route, Link} from "react-router-dom"
import Content from "./components/Content/Content";
import Exchange from "./components/Exchange/Exchange";
import Replenish from "./components/Replenish/Replenish";
import LimitOrders from "./components/LimitOrders/LimitOrders";
import Send from "./components/Send/Send";

const App = () => {
    const {telegram, onToggleButton} = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, [])

    // const theme = telegram.colorScheme;
    const theme = 'dark';

    return (
        <div className={theme === 'dark' ? styles.walletWrapperDark : styles.walletWrapperLight}>
            <Header theme={theme} />

            {/*<LinkPage className={'link'}*/}
            {/*    to={`form/`}>*/}
            {/*    setting*/}
            {/*</LinkPage>*/}

            <div className={styles.pages}>
                <Routes>
                    <Route index element={<Content />} />
                    <Route path={'/replenish/*'} element={<Replenish />} />
                    <Route path={'/limit_orders/*'} element={<LimitOrders />} />
                    <Route path={'/exchange/*'} element={<Exchange />} />
                    <Route path={'/send/*'} element={<Send />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
