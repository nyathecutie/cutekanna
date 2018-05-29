const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete()
if (message.author.id !== '295478405472845826') return;
message.channel.send({files: [ "./images/openeye.gif" ]
});
}

module.exports.help = {
  name: "openeye"
}
