const Discord = require("discord.js");
var dateFormat = require('dateformat');
var now = new Date();


module.exports.run = async (bot, message, args) => {

    message.delete()

  let servericon = message.guild.iconURL;

        let createdOn = dateFormat(message.guild.createdAt, "dddd, mmmm dS, yyyy")
        let joinedOn = dateFormat(message.member.joinedAt, "dddd, mmmm dS, yyyy")

        let serverembed = new Discord.RichEmbed()
        .setTitle("**Server Information**")
        .setColor("#ff7096")
        .setThumbnail(servericon)
        .addField("Server Name", message.guild.name)
        .addField("Server Owner", message.guild.owner)
        .addField("Created On", createdOn)
        .addField("You Joined", joinedOn)
        .addField("Total Members", message.guild.memberCount);

        return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
