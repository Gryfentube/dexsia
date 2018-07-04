const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const bot = new Discord.Client();
const adapter = new FileSync('database.json');
const db = low(adapter);
    db.defaults({ ann:[]})
        .write()
bot.login(process.env.TOKEN);

//salons DexSia Introduce YourSelf
    const annDXSIY = "452800422655033365"; //salon annonce DexSia Introduce Yourself
//Portal DexSia Introduce Yourself
    const annPoDXSIY = "455740492999688192"; //salon annonce de Portal Dxs IY
    const activitDXSIY = "455798472076034051"; //salon activité du bot DexSia Assistant
    const consauleDXSIY = "455740278272425995"; //salon console de Portal Dxs IY
//salons DexSia
    const annDXS = "454994767877636098"; //salon annonce DexSia
//Portal DexSia
    const annPoDXS = "455740525807665172"; //salon annonce de Portal DexSia
    const activitDXS = "455836828214231082"; //salon activité du bot DexSia
    const consauleDXS = "455740246110240778"; //salon console de Portal DexSia
//Admin
    const jack = "239310906981482496"; //Définir Jack avec son id
    const gryf = "187554016853622784"; //Définir Gryf avec son id
    const alladmin = "(message.member.id === jack) || (message.member.id === gryf)"; //Jack ou Gryf (dans un if généralement)
//end

var prefix = ("_"); //définir le prefix du bot
var activ = ("éradiquer les penguins"); //modifier la valeur entre guillemets pour changer son état au démarage
var values = ("empty"); //empecher les soucis de values

//event on démarrage
bot.on('ready', () => {
    bot.user.setPresence({ game: { name: activ}});
    var annonce = db.get(`ann`).map('annonce').value();
    console.log("Le bot est prêt");
    bot.channels.get(consauleDXS).send({embed: {color: 0x3ac400, author: {name: "Je suis en ligne :D",
      icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}})
});
 //event on message
bot.on('message', message => {
    var author = message.member.displayName;
    var value = message.content;
    if (message.channel.id === activitDXS) {
        bot.user.setPresence({ game: { name: value}})
            .then(bot.channels.get(consauleDXS).sendMessage({embed: {color: 0x3ac400, author: {name: "Je joue maintenant à " + value + " grâce à " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}}))};
    if (message.channel.id === annPoDXS){
        bot.channels.get(annDXS).sendMessage({embed: {color: 0x3ac400, fields: [{name: "ANNONCE", value: value}]}}) //annonce
            .then(bot.channels.get(consauleDXS).sendMessage({embed: {color: 0xe43281, author: {name: "Nouvelle annonce envoyé par " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"},
                                                               fields: [{name: "L'annonce est :", value: value}]}}))}; //console
    if (message.content === "_taco") {
        message.channel.sendMessage("<:TACO11:449684235838554114><:TACO12:449684236119572483><:TACO13:449684236266504192><:TACO14:449684236333744128>\n<:TACO21:449684236715294730><:TACO22:449684236723814411><:TACO23:449684237721796608><:TACO24:449684236899713025>\n<:TACO31:449684237508018176><:TACO32:449684237650493450><:TACO33:449684237726253056><:TACO34:449684237940031488>");
    }
    if ((message.content.startsWith("Bonjour")) || (message.content.startsWith("Salut"))) {
    message.channel.sendMessage("Hey ! Salut " + author + " ! <:051smile1:458741159288766464>");
    }
    if (message.content.startsWith("Bonne nuit")) {
    message.channel.sendMessage("Tu as raison " + author + ", il est temps d'aller dormir <:051sleeping:458741159062405141> Bonne nuit !");
    }
    if (message.content.startsWith("Bonsoir")) {
        var ladate = message.createdAt;
        var minute = ladate.getMinutes();
        var heure = ladate.getHours() + 2;
        if (heure === 24) {var heure = 0}
        if (heure === 25) {var heure = 1}
        if (heure < 10) {heure = "0" + heure}
        if (minute < 10) {minute = "0" + minute};
        if ((minute < 18) && (minute > 6)) {
                message.channel.sendMessage("Tu aurais pu dire Bonjour " + author + ", il est seulement " + heure + "h" + minute + " tu sais <:051tongue2:458741158395510784>");
        }
        else {message.channel.sendMessage("Bonswar " + author + " ! <:051smile1:458741159288766464>");}
    
    }
});
bot.on("guildMemberAdd", member => { //Quand un membre entre dans le serveur
    var welcomeDXS = member.guild.channels.find("name", "welcome"); //variable pour le salon welcome
    welcomeDXS.sendMessage('Passe un bon moment dans la **DexSia** ' + member.user + ' 😉') //envoie le message de bienvenue
    bot.channels.get(consauleDXS).sendMessage(member.user + " est arrivé dans la DexSia, le message s'est bien affiché")  //console
});

bot.on("guildMemberRemove", member => { //Quand un membre quitte dans le serveur
    var aurevoirDXS = member.guild.channels.find("name", "aurevoir"); //variable pour le salon aurevoir
    aurevoirDXS.sendMessage('**' + member.displayName + '** est partie. Rest in pepperoni...') //envoie le message de aurevoir
    bot.channels.get(consauleDXS).sendMessage(member.user + " a quitté la DexSia, le message s'est bien affiché")  //console
});
