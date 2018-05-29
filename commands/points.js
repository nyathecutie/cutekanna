
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()

let [l] = args;

if(!l) return message.channel.send("You need to set a level.");

let result = Math.floor(l * 3 + 10);


message.channel.send("You have " + result + " stat points.");
return;
}

module.exports.help = {
  name: "points"
}
