
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()

    if(!message.member.roles.find("name", "Speedster")) return message.channel.send("You need to be a Speedster to use this command.");

let [l, s] = args;

if(!l) return message.channel.send("You need to set a level.");

if(!s) return message.channel.send("You need to set your speed stat points.");

let result = Math.floor(200 * Math.pow(1.05, l) + 20 * s);


message.channel.send("You can go at " + result + "mph.");
return;
}

module.exports.help = {
  name: "speed"
}
