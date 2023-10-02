import './App.module.scss';
import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import styles from './App.module.scss';
import {useTelegram} from "./hooks/useTelegram";
import {Routes, Route, Link} from "react-router-dom"
import Form from "./components/Form/Form";
import Content from "./components/Content/Content";

const App = () => {
    const {telegram, onToggleButton} = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, [])

    const theme = telegram.colorScheme;

    return (
        <div className={theme === 'dark' ? styles.walletWrapperDark : styles.walletWrapperLight}>
            <Header theme={theme} />

            {/*<Link className={'link'}*/}
            {/*    to={`form/`}>*/}
            {/*    setting*/}
            {/*</Link>*/}


            <Routes>
                <Route index element={<Content />} />
                <Route path={'form'} element={<Form />} />
            </Routes>
        </div>
    )
}

export default App;
