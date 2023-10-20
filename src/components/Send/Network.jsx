import React from "react";


const Network = (name, commission, minAmount) => {
    return (
        <div>
            <p>{name}</p>
            <p>{commission}</p>
            <p>{minAmount}</p>
        </div>
    )
}

export default Network;