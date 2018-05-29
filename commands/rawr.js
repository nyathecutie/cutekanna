const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let patter = message.author
message.delete()

message.channel.send( `**${patter} roared, very frightening**`,  {files: [ "./images/rawr.png" ]
});
}

module.exports.help = {
  name: "rawr"
}
