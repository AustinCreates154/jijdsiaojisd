const discord = require('discord.js'),
client = new discord.Client(),
config = require('./config.json'),
prefix = "vb!",
bot.login(process.env.token);

// ===Loading commands===

bot.commands = new discord.Collection()

require('fs').readdir("./commands/", (err, files) => {
  console.log("Loading commands...");
  if (err) return console.log(`Command loading failed!`);
  files.filter(f => f.split(".").pop() === "js").forEach((f, i) => {
    bot.commands.set(require(`./commands/${f}`).help.name, require(`./commands/${f}`));
  });
});

// ===Done Loading commands===


bot.on('ready', () => {
    bot.user.setActivity({'Over violot brush', {type: "WATCHING"})
    
    
    console.log('Ready')
})
