const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

  let boticon = bot.user.displayAvatarURL;
  let helpembed = new Discord.RichEmbed()
  .setTitle("**Kanna help**")
  .setColor("#ff7096")
  .setThumbnail(boticon)
  .addField("This is the Kanna bot","Bot prefix is %, example: %help")
  .addField("Misc")
  .addField("embed", "embeds the content")
  .addField("pfp", "shows you the user's pfp better");

  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "mhelp"
}
