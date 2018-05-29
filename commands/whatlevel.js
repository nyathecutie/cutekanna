
const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
    message.delete()

var count = Math.floor(args[0]) / (args[0] * 50);
if(isNaN(count)) return message.channel.send("You need to use a number");




    return message.channel.send("``LVL you would be with that XP if started from 0 = " + count + "``");

}

module.exports.help = {
  name: "whatlvl"
}
