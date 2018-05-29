const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  message.delete()
message.channel.send({files: [ "./images/dance.gif" ]
});
}

module.exports.help = {
  name: "dance"
}
