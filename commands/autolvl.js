
const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {



if(message.author.user.id !== "413062327168925696") return;

console.log("test");

// z = xp achieved
// y = Level
// x = level after

var y = Math.floor(args[1]) + args[2]
var z = args[0]
var x = args[0]

if(isNaN(z)) return message.channel.send("You need to use a number");
if(isNaN(y)) return message.channel.send("You need to use a number");

while (z > 0) {
Math.floor(y) - ( 50 + ( x * 50 ))
x++;
if(y <= -1) {
  break;
}
}

console.log("test1")



message.channel.send("Your Level is: " + `${x}`);

}

module.exports.help = {
  name: "test"
}
