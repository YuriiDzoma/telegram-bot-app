import './App.module.scss';
import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import styles from './App.module.scss';
import {useTelegram} from "./hooks/useTelegram";
import {Routes, Route, Link} from "react-router-dom"
import Home from "./components/Home/Home";
import Exchange from "./components/Exchange/Exchange";
import Replenish from "./components/Replenish/Replenish";
import LimitOrders from "./components/LimitOrders/LimitOrders";
import Send from "./components/Send/Send";
import Info from "./components/Info/Info";
import Settings from "./components/Settings/Settings";
import Language from "./components/Settings/Language/Language";
import TermsAndConditions from "./components/Info/TermsAndConditions/TermsAndConditions";
import FeeSection from "./components/Info/FeeSection/FeeSection";

const App = () => {
    const {telegram, onToggleButton} = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, [])

    // const theme = telegram.colorScheme;
    const theme = 'dark';

    return (
        <div className={theme === 'dark' ? styles.walletWrapperDark : styles.walletWrapperLight}>
            <Header />

            {/*<LinkPage className={'link'}*/}
            {/*    to={`form/`}>*/}
            {/*    setting*/}
            {/*</LinkPage>*/}

            <div className={styles.pages}>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path={'/replenish/*'} element={<Replenish />} />
                    <Route path={'/limit_orders/*'} element={<LimitOrders />} />
                    <Route path={'/exchange/*'} element={<Exchange />} />
                    <Route path={'/send/*'} element={<Send />} />
                    <Route path={'/info/*'} element={<Info />} />
                    <Route path={'/settings/*'} element={<Settings />} />
                    <Route path={'/language/*'} element={<Language />} />
                    <Route path={'/fee_section/*'} element={<FeeSection />} />
                    <Route path={'/terms_and_conditions/*'} element={<TermsAndConditions />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
