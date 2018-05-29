const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {


  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("You don't have permissions required for this command.");

  if (isNaN(args[0])) return message.channel.send('**Please supply a valid amount of messages to purge**');

  if (args[0] > 100) return message.channel.send('**Please supply a number less than 100**');

  message.channel.bulkDelete(args[0])
      .catch( error => message.channel.send(error.message));



message.channel.send(`**Succcessfully deleted \`${args[0]}\` messages**`);




      let kickEmbed = new Discord.RichEmbed()
      .setDescription("~Purge~")
      .setColor("#e56b00")
      .addField("Purge Amount", `${args[0]}`)
      .addField("Purged By", `<@${message.author.id}> with ID ${message.author.id}`)
      .addField("Purged in", message.channel)
      .addField("Time", message.createdAt)


      let kickChannel = message.guild.channels.find(`name`, "incidents");
      if(!kickChannel) return message.channel.send("Can't find incidents channel.");

      kickChannel.send(kickEmbed);

      return;

}

module.exports.help = {
  name: "purge"
}
