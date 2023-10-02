import './App.css';
import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import {Routes, Route, Link} from "react-router-dom"
import ProductList from "./components/ProductList/ProductList";
import Form from "./components/Form/Form";

const App = () => {
    const {telegram, onToggleButton} = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, [])

    const theme = telegram.colorScheme;


    return (
        <div className={`wallet-wrapper ${theme}`}>
            <p className={'wallet-title'}>Wallet</p>
            <Link className={'link'}
                to={`form/`}>
                setting
            </Link>

            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path={'form'} element={<Form />} />
            </Routes>
        </div>
    )
}

export default App;
