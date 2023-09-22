import './App.css';
import {useEffect} from "react";

const App = () => {
    const telegram = window.Telegram.WebApp;

    useEffect(() => {
        telegram.ready();
    }, [])

    const closeTelegram = () => {
        telegram.close();
    }

  return (

      <div>
          <button onClick={closeTelegram}>Закрити</button>
      </div>
  )
}

export default App;
