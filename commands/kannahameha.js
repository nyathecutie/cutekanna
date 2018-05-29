const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  let destroyer = message.author
  let destroyed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

  if(!destroyed)
  return message.reply("Please mention a valid member of this server");

message.channel.send( `**${destroyer} destroyed ${destroyed}**`,  {files: [ "./images/kannahameha.gif" ]
});
}

module.exports.help = {
  name: "kannahameha"
}
