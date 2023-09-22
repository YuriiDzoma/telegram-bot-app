import './App.css';
import React, {useEffect} from "react";
import Header from "./components/Header/Header";

const App = () => {
    const telegram = window.Telegram.WebApp;

    useEffect(() => {
        telegram.ready();
    }, [])

    return (

        <div>
            <p>TELEGRAM TEST APP</p>

            <Header />
        </div>
    )
}

export default App;
