const baseUrl = 'https://ce-bot.com/api/v2/home/start_web_app/';


export const getUserInfo = async (value) => {
    try {
        const response = await fetch(`${baseUrl}${value}/`, {
            method: "GET",
            headers: {
                Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
            },
        });
        return await response.json()
    } catch (error) {
        console.log(error);
    }
}

export const getNetworks = async () => {
    try {
        const response = await fetch(`${baseUrl}/tokens/`, {
            method: "GET",
            headers: {
                Authorization: 'Token 0216ad349b47786f849ee6075cdc815079014f14',
            },
        });
        // return await response.json();
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}