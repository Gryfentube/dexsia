const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("_");
var activ = ("Moderer");
var values = ("empty");
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    console.log("Le bot est prêt");
    bot.channels.get('455070342612910081').send("Je suis en ligne ! :D");
});

bot.login(process.env.TOKEN);
bot.on("guildMemberAdd", member => {
    var dC = member.guild.channels.find("name", "welcome");
    dC.sendMessage('Passe un bon moment dans la **DexSia** ' + member.user + ' 😉');
});
bot.on("guildMemberRemove", member => {
    var gB = member.guild.channels.find("name", "aurevoir");
    var pute = "Quelqu'un dont on taiera le nom";
    gB.sendMessage('**' + member.user.displayName + '** est partie. Rest in pepperoni...')
});
bot.on('message', message => {

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "empty":
 break;
    }

});
