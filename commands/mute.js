const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    message.delete()

  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permissions required for this command.").then(msg => {
    msg.delete(5000)
  });

  let member = message.mentions.members.first();
  if(!member) return message.channel.send("You need to mention a member.").then(msg => {
    msg.delete(5000)
  });
  let muteRole = message.guild.roles.find("name", "Muted");
  if(!muteRole) return message.channel.send("You don't have a role named 'Muted'").then(msg => {
    msg.delete(5000)
  });
  let params = message.content.split(" ").slice(1);
  let time = params[1];
  if(!time) return message.channel.send("You need to set a time.").then(msg => {
    msg.delete(5000)
  });

  member.addRole(muteRole.id);
  message.channel.send(`${member} has been muted for ${ms(ms(time), {long: true})}. > <`).then(msg => {
    msg.delete(5000)
  });

            setTimeout(function() {
            member.removeRole(muteRole)
            message.channel.send(`**${member}** has been unmuted since they served their time(${ms(ms(time), {long: true})}). > o <`)    
            }, ms(time)).then(msg => {
    msg.delete(15000)
  })
            return;


}

module.exports.help = {
  name: "mute"
}
