const baseUrl = 'https://ce-bot.com/api/v2/home/start_web_app/';
const domain = 'https://ce-bot.com/api/v2/';

export const getUserInfo = async (value) => {
    try {
        const response = await fetch(`${baseUrl}${value}/`, {
            method: "GET",
            headers: {
                Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const getNetworks = async () => {
    try {
        const response = await fetch(`${domain}tokens/`, {
            method: "GET",
            headers: {
                Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
            },
        });
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

export const GetAddresses = async (value, id) => {
    try {
        const response = await fetch(`${domain}wallets/${value}/?profile=${id}`, {
            method: "GET",
            headers: {
                Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
            },
        })
        return await response.json();
    } catch (error) {
        console.log(error);
    }
}

// export const GetAddresses = async (value, id) => {
//     try {
//         // const response = await fetch(`${domain}wallets/${value}/profile=${id}/
//         const response = await fetch(`${domain}wallets/${value}/`+ new URLSearchParams({
//             profile: id,
//         }), {
//             method: "GET",
//             headers: {
//                 Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
//             },
//         })
//         return await response.json();
//     } catch (error) {
//         console.log(error);
//     }
// }