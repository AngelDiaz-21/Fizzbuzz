require('dotenv').config()
const TelegramBot = require("node-telegram-bot-api");
const ExplorerController = require("./controllers/ExplorerController");

class BotTelegram {
    static fizzbuzzAndNamebyMission () {
        const token = process.env.TOKEN;
        const bot = new TelegramBot(token, {polling: true});

        bot.onText(/\/echo (.+)/, (msg, match) => {
            const chatId = msg.chat.id;
            const resp = match[1];
        
            bot.sendMessage(chatId, resp);
        });

        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
            const mission = msg.text.toLowerCase();
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getValidationInNumber(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else if(mission === "node" || mission === "java"){
                const nameExplorers = ExplorerController.getExplorersUsernamesByMission(mission);
                const responseBot = `Mission: ${msg.text}. \nNombre de los explorers: ${nameExplorers} `;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número válido o una mission (node o java) correcta.");
            }
        });
    }
}

BotTelegram.fizzbuzzAndNamebyMission();

module.exports = BotTelegram;