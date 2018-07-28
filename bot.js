// Load's discord.js and defines bot
const Discord = require('discord.js')
const bot = new Discord.client()

//Defines Config
const config = ('./config.json')

//Set's the bot's game
bot.on('ready' => {
    console.log('I am logged in as ${bot.user.tag}')
    bot.user.setGame('Online Bois!')
});

// When someone wrote something
client.on("message", async message => {
    // Call the Manager! "/commands/main.js"
    Messages.ManageMessage(message, config.prefix);
});

bot.login(config.token)
