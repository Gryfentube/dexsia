const Discord = require('discord.js');


var bot = new Discord.Client();
var prefix = ("_");
var activ = ("être un idiot sans vertèbre");
var values = ("empty");

//salons DexSia Introduce YourSelf
const annDXSIY = "452800422655033365"; //salon annonce DexSia Introduce Yourself
    //Poel
    const annPoDXSIY = ""; //salon annonce de Portal Dxs IY
    const activitDXSIY = "455798472076034051"; //salon activité du bot DexSia Assistant
    const consauleDXSIY = "455740278272425995"; //salon console de Portal Dxs IY
//salons DexSia
const annDXS = "454994767877636098"; //salon annonce DexSia
    //Poel
    const annPoDXS = "455740525807665172"; //salon annonce de Portal DexSia
    const activitDXS = "455836828214231082"; //salon activité du bot DexSia
    const consauleDXS = "455740246110240778"; //salon console de Portal DexSia
//Admin
const jack = "239310906981482496"; //Définir Jack avec son id
const gryf = "187554016853622784"; //Définir Gryf avec son id
const alladmin = "(message.member.id === jack) || (message.member.id === gryf)"; //Jack ou Gryf (dans un if généralement)
//end
//varriable pour la commande custom n°1
    var input1 = "1";;
    var output1 = "1";
    var console1 = "1";

bot.login(process.env.TOKEN); //définition du token

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    console.log("Le bot est prêt");
    bot.channels.get(consauleDXS).send({embed: {color: 3447003, author: {name: "Je suis en ligne :D",
      icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}})
});

bot.on("guildMemberAdd", member => { //Quand un membre entre dans le serveur
    var dC = member.guild.channels.find("name", "welcome"); //variable pour le salon welcome
    dC.sendMessage('Passe un bon moment dans la **DexSia** ' + member.user + ' 😉') //envoie le message de bienvenue
    bot.channels.get('455070342612910081').sendMessage(member.user + " est arrivé dans la DexSia, le message s'est bien affiché")  //console
});

bot.on("guildMemberRemove", member => { //Quand un membre quitte dans le serveur
    var gB = member.guild.channels.find("name", "aurevoir"); //variable pour le salon aurevoir
    gB.sendMessage('**' + member.displayName + '** est partie. Rest in pepperoni...') //envoie le message de aurevoir
    bot.channels.get('455070342612910081').sendMessage(member.user + " a quitté la DexSia, le message s'est bien affiché")  //console
});
bot.on('message', message => {
    
        if (message.channel.id === activitDXS) {
    var value = message.content;
    bot.user.setPresence({ game: { name: value}})
        .then(bot.channels.get(consauleDXS).sendMessage({embed: {color: 0x202020, author: {name: "Je suis en ligne :D",
      icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}})
}));
    }
    
    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");
    var author = message.member.displayName;
    switch (args[0].toLowerCase()){

        case "oui":
            message.channel.send({embed: {color: 3447003, author: {name: author, icon_url: message.member.avatarURL},
                                title: "Titre numéro 1", url: "https://www.google.fr/search?q=ON+CHERCHE+QUOI+LES+GARS+%3F&rlz=1C1CHBD_frFR725FR725&oq=ON+CHERCHE+QUOI+LES+GARS+%3F&aqs=chrome..69i57.6119j1j7&sourceid=chrome&ie=UTF-8",
                                description: "Ouais donc les gars on fait des test pour la suite",
                                fields: [{name: "C'EST LA SUITE", value: "EN FAIT UAI"},
                                {name: "UESH LES POTES",
                                 value: "REGARDE CE QU'ON PEUT FAIRE [C'EST FOU](https://www.google.fr/search?q=ON+CHERCHE+QUOI+LES+GARS+%3F&rlz=1C1CHBD_frFR725FR725&oq=ON+CHERCHE+QUOI+LES+GARS+%3F&aqs=chrome..69i57.6119j1j7&sourceid=chrome&ie=UTF-8) FJKGDKFGJBD"},
                                {name: "Et en plus les trucs fonctionnes", value: "vouala *alouwa* **__alfksds__** de danana to."}],
                                timestamp: new Date(), footer: {icon_url: message.member.avatarURL, text: "© Gryf 2049"}}});
 break;
    }

});
