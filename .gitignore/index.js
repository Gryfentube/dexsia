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
            .then(bot.channels.get(consauleDXS).sendMessage({embed: {color: 0x202020, author: {name: "Je joue maintenant à " + value + " grâce à " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}}))};
    if (message.channel.id === annPoDXS){
        bot.channels.get(annDXS).sendMessage({embed: {color: 0xe43281, fields: [{name: "ANNONCE", value: value}]}}) //annonce
            .then(bot.channels.get(consauleDXS).sendMessage({embed: {color: 0xe43281, author: {name: "Nouvelle annonce envoyé par " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"},
                                                               fields: [{name: "L'annonce est :", value: value}]}}))}; //console
});
bot.on("guildMemberAdd", member => { //Quand un membre entre dans le serveur
    var welcomeDXS = member.guild.channels.find("name", "welcome"); //variable pour le salon welcome
    bot.channels.get(welcomeDXS).sendMessage('Passe un bon moment dans la **DexSia** ' + member.user + ' 😉') //envoie le message de bienvenue
    bot.channels.get(consauleDXS).sendMessage(member.user + " est arrivé dans la DexSia, le message s'est bien affiché")  //console
});

bot.on("guildMemberRemove", member => { //Quand un membre quitte dans le serveur
    var aurevoirDXS = member.guild.channels.find("name", "aurevoir"); //variable pour le salon aurevoir
    bot.channels.get(aurevoirDXS).sendMessage('**' + member.displayName + '** est partie. Rest in pepperoni...') //envoie le message de aurevoir
    bot.channels.get(consauleDXS).sendMessage(member.user + " a quitté la DexSia, le message s'est bien affiché")  //console
});
