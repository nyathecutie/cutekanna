const botconfig = require('./botconfig.json');
const tokenfile = require('./token.json');
const Discord = require('discord.js');
// const Music = require('discord.js-musicbot-addon');
const ms = require("ms");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
let coins = require("./coins.json");
let xpReq = require("./xpreq.json");

bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

// Music.start(bot, {
//   prefix: "%",
//   maxQueueSize: "1",
//   disableLoop: false,
//   leaveHelp: "Bad help text.",
//   leaveAlt: ["lve","leev","un1c0rns"],
//   helpCmd: 'musichelp',
//   leaveCmd: 'begone',
//   logging: true,
//   ownerOverMember: true,
//   botOwner: '413062327168925696',
//   enableQueueStat: true,
//   youtubeKey: 'AIzaSyAqMT_swdWQZXyUdJV5t_y5Zxhm_GZtIMg'
// });

//s

//sendnya
// bot.on('message', message => {
//     if (message.content !== "Nya" ) return;
//     message.channel.send(`${Nya}`);
// });



//choo choo
bot.on('message', message => {
    if (message.content !== "choo choo" ) return;
message.channel.send("CHOOOOO CHOOOOO")
});



//choo choo choo
bot.on('message', message => {
    if (message.content !== "choo choo choo" ) return;
message.channel.send("muther fukin chooooooooo")
});




// chooo chooo
bot.on('message', message => {
    if (message.content !== "chooo chooo" ) return;
message.channel.send("cho0o0o0o0o0 cho0o0o0o0o0")
});



// watching
bot.on('ready', async () => {
  console.log(`${bot.user.username} is online!`);
  bot.user.setActivity("over omniverses.", { type: 'WATCHING'})
});



// nya
// bot.on('message', message => {
//     if (message.author.id !== '413062327168925696') return;
//     message.react('444472329200992257');
// });
//
//
//
//
//
//
//
// // akira
// bot.on('message', message => {
//     if (message.author.id !== '292415485335830530') return;
//     message.react('444515163362820097');
// });
//
//
//
//
//
//
// // kim
// bot.on('message', message => {
// if (message.author.id !== '295478405472845826') return;
// message.react('444473237058093056');
// });



// gay
bot.on('message', message => {
    if (message.content !== "gay" ) return;
message.react('429373783418077184');
});



// E
bot.on('message', message => {
    if (message.content !== "E" ) return;
    message.react('🇪').then
    setTimeout(function() {
message.react('🇮')
    }, 1000).then
    setTimeout(function() {
message.react('🇸')
}, 2000).then
    setTimeout(function() {
message.react('🇬')
}, 3000).then
    setTimeout(function() {
message.react('🇦')
}, 4000).then
    setTimeout(function() {
message.react('🇾')
}, 5000);
});

// e
bot.on('message', message => {
    if (message.content !== "e" ) return;
    message.react('🇪').then
    setTimeout(function() {
message.react('🇮')
    }, 1000).then
    setTimeout(function() {
message.react('🇸')
}, 2000).then
    setTimeout(function() {
message.react('🇬')
}, 3000).then
    setTimeout(function() {
message.react('🇦')
}, 4000).then
    setTimeout(function() {
message.react('🇾')
}, 5000);
});


// kanna
bot.on('message', message => {
    if (message.content !== "kanna" ) return;
message.react('444472329200992257');
});

bot.on('guildMemberAdd', member => {
    if (member.guild.id !== 442724331089297438) return;

    var role = member.guild.roles.find('name', 'Needs Verification');

    member.addRole(role.id);
});


bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

// let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
//
// if(!prefixes[message.guild.id]){
//   prefixes[message.guild.id] = {
//       prefixes: botconfig.prefix
//   };
// }

//   if(!coins[message.author.id]){
//     coins[message.author.id] = {
//       coins: 0
//     };
//
//   }
//
// let coinAmt = Math.floor(Math.random() * 15) + 1;
// let baseAmt = Math.floor(Math.random() * 15) + 1;
//
//
// if(coinAmt === baseAmt){
//   coins[message.author.id] = {
//     coins: coins[message.author.id].coins + coinAmt
//   };
//   fs.writeFile("./coins.json", JSON.stringify(coins), (err) => {
//     if (err) console.log(err)
//   });
// }

// let prefix = prefixes[message.guild.id].prefixes;


  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(!cmd.startsWith(prefix)) return;

  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

});


bot.login(tokenfile.token);
