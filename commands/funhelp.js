const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

  let boticon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("**Kanna help**")
  .setColor("#ff7096")
  .setThumbnail(boticon)
  .addField("This is the Kanna bot","Bot prefix is %, example: %help")
  .addField("Fun")
  .addField("snuggle", "You must mention someone afterwards.")
  .addField("pat", "You must mention someone afterwards.")
  .addField("nom", "You must mention someone afterwards.")
  .addField("lick", "You must mention someone afterwards.")
  .addField("love", "You must mention someone afterwards.")
  .addField("hug", "You must mention someone afterwards.")
  .addField("sleep", "You must mention someone afterwards.")
  .addField("kannahameha", "You must mention someone afterwards.")
  .addField("dance", "-")
  .addField("rawr", "-")
  .addField("religion", "-")
  .addField("cry", "-");

  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "fhelp"
}
