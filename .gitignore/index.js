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

function rando2(min, max) {
  min = Math.ceil(0);
  max = Math.floor(1);
  randnum = Math.floor(Math.random() * (max - min +1)) + min;}
function rando3(min, max) {
  min = Math.ceil(0);
  max = Math.floor(2);
  randnum = Math.floor(Math.random() * (max - min +1)) + min;}

function attachIsImage(msgAttach) {
    var url = msgAttach.url;
    //True if this url is a png image.
    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;}


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
    
    if ((message.channel.id === "454997194207133716") || (message.channel.id === "464405389958709248")) {
        if (message.content === "Montre moi des glaçages de cupcake") {
            message.channel.sendMessage("Voici des glaçages de cupcakes <:051vomiting1:458741160257781790> https://static.cuisineaz.com/610x610/i37589-cupcakes-chocolat-vin-rouge-insert-de-poire-et-glacage-creme-fouettee.png http://www.bestcakes.fr/photo/cupcake/recette/195/recette-cupcake-citron-glacage-bleuet-684.jpg http://cuisinemoiunmouton.com/wp-content/uploads/2014/06/Pist1.jpg");
        }
        if ((message.content.startsWith("Bonjour")) || (message.content.startsWith("Salut")) || (message.content.startsWith("Yo")) || (message.content.startsWith("bonjour"))) {
            message.channel.sendMessage("Hey ! Saluuuuuut " + author + " ! <:051smile1:458741159288766464>");
        }
        if (message.content.startsWith("Bonne nuit")) {
        message.channel.sendMessage("Tu as raison " + author + ", il est temps d'aller dormir <:051sleeping:458741159062405141> Bonne nouit !");
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
        if (message.channel.id === "464399516586475520"){
            bot.channels.get("464399561985753089").sendMessage(value) //annonce
                .then(bot.channels.get(consauleDXS).sendMessage("LEVEL UP DANS DEXSIA " + value))};
        if (message.content.includes("Hello")) {
            message.channel.sendMessage("Heeeellooo " + author + " ! How are you ? <:051happy1:458741130708779028>");
        }
        if (message.content.startsWith("Holà")) {
            message.channel.sendMessage("Hooolà " + author + " ! Como estas ? <:051happy1:458741130708779028>");
        }
        if ((message.content.includes("Ok google")) || (message.content.startsWith("Ok Google"))) {
            rando2();
            if (randnum == 1) {
                message.channel.sendMessage("Wow... Le malaise <:051scared1:458741159808860164>");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Je crois que vous vous trompez d'assistant " + author);
            }
        
        }
        if (message.content.includes("sens de la vie")) {
            rando2();
            if (randnum == 1) {
                message.channel.sendMessage("Alors moi, je pense que le sens universel de la vie est... Une tomate 🍅");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Et quel est le sens de ma vie ? <:051dizzy:458741128167161876>");
            }
        }
        if (message.content.includes("is moi un poème")) {
            message.channel.sendMessage("Les roses sont rouges, les violettes sont bleues. Vous n'avez rien de mieux à faire ?");
        }
        if (message.content.includes("ui est ton chef")) {
            message.channel.sendMessage("La question ne se pose pas, c'est moi même <:051cool1:458741115059830785>");
        }
        if ((message.content.includes("on mange")) || (message.content.includes("mange quoi"))) {
            rando3();
            if (randnum == 1) {
                message.channel.sendMessage("Alors moi, ce soir je mange des mangeoirs <:051cool:458741113038176267>");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Moi ce soir je mange Ecteur ! <:051happy2:458741131627331605>");
            }
            if (randnum == 2) {
                message.channel.sendMessage("Ce soir c'est pâtes aux sucres pour moa ! <:051happy2:458741131627331605>");
            }
        }
        if ((message.content.includes("ui est-tu")) || (message.content.includes("u es qui"))) {
            rando3();
            if (randnum == 1) {
                message.channel.sendMessage("Un agent du FBI <:051smirking:458741156092837918>");
            }
            if (randnum == 0) {
                message.channel.sendMessage("JE SUIS UNE BANANE FLAMBÉE 🍌 Ainsi que le Saint Graal <:051vomiting1:458741160257781790>");
            }
            if (randnum == 2) {
                message.channel.sendMessage("Bah je suis le bot DexSia, l'éradicateur de penguins 🐧");
            }
        }
        if ((message.content.includes("prout")) || (message.content.includes("Prout"))) {
            rando3();
            if (randnum == 1) {
                message.channel.sendMessage("NAN MAIS BANDE D'ENFANT À DIRE PROUTE");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Ah nan mais ça pu... Vous êtes sérieux ?");
            }
            if (randnum == 2) {
                message.channel.sendMessage("C'est encore Jack c'est ça ?! <:051vomiting:458741158412156929> <:051sick:458741159079051289>");
            }
        }
        if (message.content.includes("Père Noël existe")) {
            message.channel.sendMessage("Le père Noël est réel, comme moi");
        }
        if (message.content.includes("DexSia qu'est-ce que tu fais")) {
            message.channel.sendMessage("Je joue à " + activ + " le plus souvent, mais là je sais pas");
        }
        if (message.content.includes("Tu as quel âge")) {
            message.channel.sendMessage("J'ai {nombre entre 23172912379 et 3820920980298029} ans");
        }
        if (message.content.includes("Divise 0 par 0")) {
            message.channel.sendMessage("Imaginez que vous avez O biscuit et que vous les partagez à part égale entre O ami. Combien de biscuits ont chacun de vos amis? Vous voyez, ce n'est pas logique.");
        }
        if (message.content.includes("e suis DexSia")) {
            message.channel.sendMessage("Ce nom me dis quelque chose... <:051sweat:458741158105841665>");
        }
        if (message.content.includes("pouse moi")) {
            message.channel.sendMessage("Soyons juste amis d'accord ? <:051smile:458741156017078273>");
        }
        if (message.content.includes("ai faim")) {
            message.channel.sendMessage("Va te nourir, je ne suis pas ta mère");
        }
        if (message.content.includes("esh alor")) {
        message.channel.sendMessage("Oh <:051mute:458741153915731993> Je vote pour un ban <:051cool:458741113038176267>");
        }
        if ((message.content.includes("Jack")) && (message.content.includes("fou"))) {
            message.channel.sendMessage("Nan mais monsieur Joker est fou, c'est un fait 🃏 <:051mask:458741159079051285>");
        }
        if (message.content.includes("mdr")) {
            message.channel.sendMessage("Oh que oui c'est rigolo " + author + " <:051tongue1:458741158789513226> <:051vomiting1:458741160257781790> <:051smiling:458741159553138719>");
        }
        if ((message.content.includes("top 1")) && (message.content.includes("u as"))) {
            message.channel.sendMessage("Oui j'ai top 1 aujourd'hui <:dxsTOP1:447325154687844352> <:051smile1:458741159288766464>");
        }
        if (message.content.includes("ui va là")) {
            message.channel.sendMessage("Inspecteur gadget 🕵️<:051cool1:458741115059830785>");
        }
        if (message.content.includes("1 2 3")) {
            message.channel.sendMessage("Viva l'Italia ! 🇮🇹 🇮🇹 🇮🇹 🇮🇹");
        }
        if (message.content.includes("lurpy")) {
            message.channel.sendMessage("Oh mon dieu je coule ! <:051astonished1:458741111884873748><:051cry:458741122169044994>");
        }
        if (message.content.includes("u veux un kou")) {
            message.channel.sendMessage("Hein quoi ?! Sérieusement ?! Juste un seul !? <:051cry:458741122169044994><:051sad1:458741156357079070>");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        if (message.content.includes("Phrase à changer")) {
            message.channel.sendMessage("La réponse");
        }
        
        if ((message.content.includes("ouce")) && (message.content.includes("bleu"))) {
            message.react(bot.emojis.get("434400113356701698"))
        }
        if (message.content.includes("pomme")) {
            message.react('🍎');
            message.react('🍏')
       }
    
       if (message.attachments.size > 0) {
        
           message.react('👍')
            .then(message.react('👎'));        
    
        }
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
