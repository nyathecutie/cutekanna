const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
message.channel.send({files: [ "./images/religion.jpg" ]
});
}

module.exports.help = {
  name: "religion"
}
