const baseUrl = 'https://ce-bot.com/api/v2/home/start_web_app/'

const getUserInfo = async ({id}) => {
    fetch(`${baseUrl}${id}`, {
        method: "GET",
        headers: {
            Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
        },
    })
        .then((response) => console.log(response))
        .then((data) => {
            console.log(data);
        })
        .catch((error) => console.log(error));
}