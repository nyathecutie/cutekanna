const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {



  let patter = message.author
  let patted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
message.delete()
  if(!patted)
  return message.reply("Please mention a valid member of this server");

message.channel.send( `**${patter} snuggled with ${patted}**`, {files: [ "./images/snuggle.gif" ]
});
}

module.exports.help = {
  name: "snuggle"
}
