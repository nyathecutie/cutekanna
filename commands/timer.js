const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

message.delete()

        let params = message.content.split(" ").slice(1);
        let time = params[0];

        if (!time) return message.channel.send("You need to set a time. > <");
  
            message.channel.send(`${message.author}, you set a timer of **${ms(ms(time), {long: true})}**. > w <`);


            
            setTimeout(function() {
            message.channel.send(`${message.author}, your timer is done **${ms(ms(time), {long: true})}**. > o <`)    
            }, ms(time))
            return;

}

module.exports.help = {
  name: "timer"
}
