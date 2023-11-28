const baseUrl = 'https://ce-bot.com/api/v2/home/start_web_app/';

// export const getUserInfo = async () => {
//     fetch(`${baseUrl}${463697926}/`, {
//         method: "GET",
//         headers: {
//             Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
//         },
//     })
//         .then((response) => response.json())
//         .then((data) => {
//             return data;
//         })
//         .catch((error) => console.log(error));
// }

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

//
// export const getUserInfo = async () => {
//
//     return await axios.get('https://ce-bot.com/api/v2/home/start_web_app/463697926/', {
//         Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
//     });
// };
