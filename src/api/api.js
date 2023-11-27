const baseUrl = 'https://ce-bot.com/api/v2/home/start_web_app/'

const getUserInfo = async ({id}) => {
    fetch(`${baseUrl}${id}`, {
        method: "GET",
        headers: {
            "X-RapidAPI-Key": "your-api-key",
            "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
        },
    })
        .then((response) => console.log(response))
        .then((data) => {
            setJoke(data[0].joke);
            console.log(data);
        })
        .catch((error) => console.log(error));
}