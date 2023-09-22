import './App.css';
import React, {useEffect} from "react";
import Header from "./components/Header/Header";
import {useTelegram} from "./hooks/useTelegram";

const App = () => {
    const {telegram, onToggleButton} = useTelegram();

    useEffect(() => {
        telegram.ready();
    }, [])

    return (

        <div className={'App'}>
            <p>TELEGRAM TEST APP</p>

            <Header />
            <button onClick={onToggleButton}>toggle</button>
        </div>
    )
}

export default App;
