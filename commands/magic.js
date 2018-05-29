const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

if (message.author.id !== '295478405472845826') return;
message.channel.send({files: [ "./images/magic.gif" ]
});
}

module.exports.help = {
  name: "magic"
}
