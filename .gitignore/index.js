const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("_");
var activ = ("Moderer");
var values = ("empty");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    console.log("Le bot est prêt");
    
});

bot.login(process.env.TOKEN);
bot.on("guildMemberAdd", member => {
    bot.channels.get('454987596960104452').sendMessage('Passe un bon moment dans la  **DexSia** ' + member.user + ' 😉')
});
bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "empty":
 break:
    }

});
