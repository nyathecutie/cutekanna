
const Discord = require("discord.js");
let coins = require("../coins.json");

module.exports.run = async (bot, message, args) => {
    message.delete()
    if(!coins[message.author.id]){
      coin[message.author.id] = {
        coins: 0
      };
    }

let uCoins = coins[message.author.id].coins;

let coinEmbed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#ff7096")
.addField("<:Nya:444472329200992257>", uCoins);

message.channel.send(coinEmbed).then(msg => {msg.delete(5000)});

}

module.exports.help = {
  name: "coins"
}
