const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("639242701652623361")
setInterval(function() {
channel.send(`Geeet Credits Geeet Credits Geeet Credits Geeet Credits Geeet Credits Geeet Credits `);
}, 30)
})

client.login(process.env.BOT_TOKEN);