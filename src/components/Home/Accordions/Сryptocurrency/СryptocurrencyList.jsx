import * as React from "react";
import {useSelector} from "react-redux";
import {getCryptocurrency} from "../../../../store/selectors";
import Cryptocurrency from "./Cryptocurrency";


const CryptocurrencyList = () => {
    const cryptocurrency = useSelector(getCryptocurrency);

    return (
        <>
            {cryptocurrency && (
                cryptocurrency.map((item, index) => <Cryptocurrency
                    key={index}
                    name={item.token}
                    icon={item.icon}
                    balance={item.balance}
                />)
            )}
        </>
    )
}

export default CryptocurrencyList;