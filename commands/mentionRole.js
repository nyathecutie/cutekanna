const Discord = require("discord.js");
var delay = ( function() {
    var timer = 0;
    return function(callback, ms) {
        clearTimeout (timer);
        timer = setTimeout(callback, ms);
    };
})();



module.exports.run = async (bot, message, args) => {
    message.delete()

if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You don't have permissions required for this command.");


let rolea = args[0]

if(!rolea) return message.channel.send("You need to say the name of a role.");

let role = message.guild.roles.find("name", `${rolea}`);

if(!role) return message.channel.send("Role not found.");

role.setMentionable(true);

role.setMentionable(true);

delay(function(){
}, 3000 );
        message.channel.send(`${role}`);
delay(function(){
}, 5000 );
role.setMentionable(false);
return;
}

module.exports.help = {
  name: "mention"
}