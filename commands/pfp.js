const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

message.delete()

        let member = message.mentions.members.first();
        let membericon = member.user.displayAvatarURL;
        let embed = new Discord.RichEmbed()
        .setColor("#ff7096")
        .setThumbnail(membericon)


        return message.channel.send(embed);
}

module.exports.help = {
  name: "pfp"
}
