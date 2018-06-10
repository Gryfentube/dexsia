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

//varriable pour la commande custom n°1
    var input1 = "1";;
    var output1 = "1";
    var console1 = "1";

bot.login(process.env.TOKEN); //définition du token

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

    if (!message.content.startsWith(prefix)) return;
    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){

        case "OUI":
            message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "Titre numéro 1",
    url: "https://www.google.fr/search?q=ON+CHERCHE+QUOI+LES+GARS+%3F&rlz=1C1CHBD_frFR725FR725&oq=ON+CHERCHE+QUOI+LES+GARS+%3F&aqs=chrome..69i57.6119j1j7&sourceid=chrome&ie=UTF-8",
    description: "Ouais donc les gars on fait des test pour la suite",
    fields: [{
        name: "C'EST LA SUITE",
        value: "EN FAIT UAI"
      },
      {
        name: "UESH LES POTES",
        value: "REGARDE CE QU'ON PEUT FAIRE [C'EST FOU](https://www.google.fr/search?q=ON+CHERCHE+QUOI+LES+GARS+%3F&rlz=1C1CHBD_frFR725FR725&oq=ON+CHERCHE+QUOI+LES+GARS+%3F&aqs=chrome..69i57.6119j1j7&sourceid=chrome&ie=UTF-8) FJKGDKFGJBD"
      },
      {
        name: "Et en plus les trucs fonctionnes",
        value: "vouala *alouwa* **__alfksds__** de danana to."
      }
    ],
    timestamp: new Date(),
    footer: {
      icon_url: client.user.avatarURL,
      text: "© Gryf 2049"
    }
  }
});
 break;
    }

});
