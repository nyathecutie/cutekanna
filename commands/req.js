
const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
    message.delete()

var count = Math.floor(args[0]) * 50;
if(isNaN(count)) return message.channel.send("You need to use a number");
var previous = Math.floor(args[0]) - 1;




    return message.channel.send("``XP required" + " from level " + `${previous}` + " for LVL " + `${args[0]}` + " = "  + count + "``");

}

module.exports.help = {
  name: "req"
}
