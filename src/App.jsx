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
import TwoFactorAuth from "./components/Settings/TwoFactorAuth/TwoFactorAuth";
import {getUserInfo} from "./api/api";
import {useAppDispatch} from "./hooks/redux";
import {setBalance, setCryptocurrency, setTokenName, setTransactionHistory} from "./store/wallet-slice";

const App = () => {
    const {telegram, onToggleButton, user} = useTelegram();
    const dispatch = useAppDispatch();

    useEffect(() => {
        telegram.ready();
    }, [])

    // useEffect(() => {
    //     getUserInfo().then((res) => console.log(res))
    // }, [])

    useEffect(() => {
        getUserInfo(user? user : 463697926).then((response) => {
            console.log(response)
            dispatch(setBalance(response.user_balance));
            dispatch(setTokenName(response.token_name));
            dispatch(setTransactionHistory(response.transaction_history));
            dispatch(setCryptocurrency(response.cryptocurrency));
        })
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
                    <Route path={'/two_factor_authentication/*'} element={<TwoFactorAuth />} />
                </Routes>
            </div>
        </div>
    )
}

export default App;
