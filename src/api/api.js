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

export const getAddresses = async (value, id) => {
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

export const getQrCode = async (address, type) => {
    try {
        const response = await fetch(`${domain}qr_code/generate/${type}/${address}/`, {
            method: "GET",
            headers: {
                Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
            }
        })
        return await response.json();
    } catch (error) {
        return error;
    }
}

export const createWallet = async (type, telegramId) => {
    try {
        const response = await fetch(`${domain}wallets/${type}/`, {
            method: "POST",
            headers: {
                Authorization: 'Token af9bbdda4b98828b15e3a37207eed08f02dbd33a',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({telegram_id: telegramId})
        })
        return await response.json();
    } catch (error) {
        return error;
    }
}

// const TelegramBot = require('node-telegram-bot-api');
//
// const token = '6363310007:AAGBFRy5FkcAeDn7eIs_lJEGxFh5rge0oT4';
// let webAppUrl = 'https://web-dvstr.netlify.app';
// const gameName = process.env.TELEGRAM_GAMENAME || 'YOUR_TELEGRAM_GAMENAME';
// const port = process.env.PORT || 8080;
//
// const express = require('express');
// const path = require('path');
//
// const bot = new TelegramBot(token, {polling: true});
// const app = express();
//
// app.set('view engine', 'ejs');
//
//
// bot.on('message', async (msg) => {
//     const chatId = msg.chat.id;
//     const text = msg.text;
//
//     if (webAppUrl === '0') {
//         const ngrok = require('ngrok');
//         ngrok.connect(port, function onConnect(error, u) {
//             if (error) throw error;
//             webAppUrl = u;
//             console.log(`Game tunneled at ${webAppUrl}`);
//         });
//     }
//
// // Matches /start
//     bot.onText(/\/start/, function onPhotoText(msg) {
//         bot.sendGame(msg.chat.id, gameName);
//     });
//
// // Handle callback queries
//     bot.on('callback_query', function onCallbackQuery(callbackQuery) {
//         bot.answerCallbackQuery(callbackQuery.id, { webAppUrl });
//     });
//
// // Render the HTML game
//     app.get('/', function requestListener(req, res) {
//         res.sendFile(path.join(__dirname, 'game.html'));
//     });
//
// // Bind server to port
//     app.listen(port, function listen() {
//         console.log(`Server is listening at http://localhost:${port}`);
//     });
//
//     if (text === '/start') {
//
//         await bot.sendMessage(chatId, 'перейти в додаток', {
//             reply_markup: {
//                 inline_keyboard: [
//                     [{text: 'app', web_app:{url: webAppUrl}}]
//                 ]
//             }
//         });
//     }
//
//     // send a message to the chat acknowledging receipt of their message
//     bot.sendMessage(chatId, 'Received your messssssage');
// });