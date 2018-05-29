const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.delete()

if (!message.guild) return;

    //%Ban @daeshan askin for it

    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return message.channel.send("Can't find user!");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You don't have permissions required for this command.");
    if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("That person can't be Banned!");

    let BanEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#e56b00")
    .addField("Banned User", `${bUser} with ID ${bUser.id}`)
    .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
    .addField("Banned In", message.channel)
    .addField("Time", message.createdAt)
    .addField("Reason", bReason);

    let BanChannel = message.guild.channels.find(`name`, "incidents");
    if(!BanChannel) return message.channel.send("Can't find incidents channel.");

    message.guild.member(bUser).ban(bReason);
    BanChannel.send(BanEmbed);

    return;
}

module.exports.help = {
  name: "ban"
}
