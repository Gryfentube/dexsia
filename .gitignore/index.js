//constante
const Discord = require('discord.js');
const low = require('lowdb');
const jimp = require('jimp')
const faker = require('faker');
faker.locale = "fr";
const FileSync = require('lowdb/adapters/FileSync')
const bot = new Discord.Client();
const adapter = new FileSync('database.json');
var i = 0;
const db = low(adapter);
    db.defaults({ ann:[]})
        .write()
bot.login(process.env.TOKEN);
		//salon 
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

//variable de départ
	faker.locale = "fr";
	var prefix = ("_"); //définir le prefix du bot
	var activ = ("éradiquer un penguin"); //modifier la valeur entre guillemets pour changer son état au démarage
	var values = ("empty"); //empecher les soucis de values
//fonction
	function rando2(min, max) {
	  min = Math.ceil(0);
	  max = Math.floor(1);
	  randnum = Math.floor(Math.random() * (max - min +1)) + min;
	}
	function rando3(min, max) {
	  min = Math.ceil(0);
	  max = Math.floor(2);
	  randnum = Math.floor(Math.random() * (max - min +1)) + min;
	}
	function attachIsImage(msgAttach) {
	    var url = msgAttach.url;
	    return url.indexOf("png", url.length - "png".length /*or 3*/) !== -1;
	}

//event on démarrage
	bot.on('ready', () => {
	    bot.user.setPresence({ game: { name: activ}});
	    var annonce = db.get(`ann`).map('annonce').value();
	    console.log("Le bot est prêt");
	    bot.channels.get(consauleDXS).send({embed: {color: 0x3ac400, author: {name: "Je suis en ligne :D",
	      icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}})
	});

//join member
bot.on("guildMemberAdd", member => { //Quand un membre entre dans le serveur
    var welcomeDXS = member.guild.channels.find("name", "welcome"); //variable pour le salon welcome
    welcomeDXS.sendMessage('Passe un bon moment dans la **DexSia** <:051wink:473830228410499072>') //envoie le message de bienvenue
    bot.channels.get(consauleDXS).sendMessage(member.user + " est arrivé dans la DexSia, le message s'est bien affiché")  //console
});

//leave member
bot.on("guildMemberRemove", member => { //Quand un membre quitte dans le serveur
    var aurevoirDXS = member.guild.channels.find("name", "aurevoir"); //variable pour le salon aurevoir
    aurevoirDXS.sendMessage('**' + member.displayName + '** est partie. Rest in pepperoni... <:051cry:473830225801641987>') //envoie le message de aurevoir
    bot.channels.get(consauleDXS).sendMessage(member.user + " a quitté la DexSia, le message s'est bien affiché")  //console
})

//on message
bot.on('message', message => {
//var
	//message
	var author = message.member.displayName;
	var value = message.content;
	var messlow = value.toLowerCase();
	//user
	const jack = "239310906981482496";
	const gryf = "187554016853622784";
	const suky = "289082423960928256";
	const ragna = "275306941515825163";
	const ecteur = "337269254208618507";
	const marie = "426496080272818186";
	const wena = "313117398171648000";
	const rock = "266729241549340672";
	const riva = "223061384320122880";
	const michi = "408313237134901249";
	const miyuki = "350022867980910595";
	const lika = "415547757777125392";
	//gif
	const soutienstitch = bot.emojis.find("name", "soutienstitch");
	const penguin = bot.emojis.find("name", "penguin");
	const charge = bot.emojis.find("name", "charge");
	const dodostitch = bot.emojis.find("name", "dodostitch");
	const ventistitch = bot.emojis.find("name", "ventistitch");
//mess
	if (message.channel.id === activitDXS) {
        bot.user.setPresence({ game: { name: value}})
            .then(bot.channels.get(consauleDXS).sendMessage({embed: {color: 0x3ac400, author: {name: "Je joue maintenant à " + value + " grâce à " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"}}}))
    };
    if (message.channel.id === annPoDXS){
        bot.channels.get(annDXS).sendMessage({embed: {color: 0x3ac400, fields: [{name: "ANNONCE", value: value}]}}) //annonce
            .then(bot.channels.get(consauleDXS).sendMessage({embed: {color: 0xe43281, author: {name: "Nouvelle annonce envoyé par " + author,
                                                               icon_url: "https://cdn.discordapp.com/icons/441664261454823444/1cced0ad87913d0d5232dce11bedb70f.png"},
                                                               fields: [{name: "L'annonce est :", value: value}]}}))
    }; //console
    if (message.channel.id === "464399516586475520"){
            bot.channels.get("464399561985753089").sendMessage(value) //annonce
                .then(bot.channels.get(consauleDXS).sendMessage("LEVEL UP DANS DEXSIA " + value))
    };

if (!message.member.user.bot) {
	if ((message.channel.id === "454997194207133716") || (message.channel.id === "464405389958709248")) {

//1 réponses possibles
	//content = message qui est 
		if (messlow === "taco") {
            message.channel.sendMessage("<:TACO11:449684235838554114><:TACO12:449684236119572483><:TACO13:449684236266504192><:TACO14:449684236333744128>\n<:TACO21:449684236715294730><:TACO22:449684236723814411><:TACO23:449684237721796608><:TACO24:449684236899713025>\n<:TACO31:449684237508018176><:TACO32:449684237650493450><:TACO33:449684237726253056><:TACO34:449684237940031488>");
        }
        if (messlow === "montre moi des glaçages de cupcake") {
            message.channel.sendMessage("Voici des glaçages de cupcakes <:051vomiting1:473830230474358794> https://static.cuisineaz.com/610x610/i37589-cupcakes-chocolat-vin-rouge-insert-de-poire-et-glacage-creme-fouettee.png http://www.bestcakes.fr/photo/cupcake/recette/195/recette-cupcake-citron-glacage-bleuet-684.jpg http://cuisinemoiunmouton.com/wp-content/uploads/2014/06/Pist1.jpg");
        }
    //startwith = message qui comme par
    	if (messlow.startsWith("bonne nuit")) {
        message.channel.sendMessage("Tu as raison " + author + ", il est temps d'aller dormir <:051sleeping:473830229513601024> Bonne nuit !")
            .then(message.channel.sendMessage(dodostitch + " "))
        }
        if (message.content.startsWith("bonsoir")) {
                message.channel.sendMessage("Bonsoir " + author + " ! <:051smile1:473830230302261259>");
        }
        if (messlow.startsWith("hello")) {
            message.channel.sendMessage("Heeeellooo " + author + " ! How are you ? <:051happy1:473830225709629472>");
        }
        if (messlow.startsWith("holà")) {
            message.channel.sendMessage("Hooolà " + author + " ! Como estas ? <:051happy1:473830225709629472>");
        }
    //includes = message qui inclu
    	if (messlow.includes("taco")) {
            message.channel.sendMessage("🇹🅰️🇨🅾️🇸");
        }
        if (messlow.includes("dis moi un poème")) {
            message.channel.sendMessage("Les roses sont rouges, les violettes sont bleues. Vous n'avez rien de mieux à faire ?");
        }
        if (messlow.includes("qui est ton chef")) {
            message.channel.sendMessage("La question ne se pose pas, c'est moi même <:051cool1:473830230210117642");
        }
        if (messlow.includes("père noël existe")) {
            message.channel.sendMessage("Le père Noël est réel, comme moi");
        }
        if (messlow.includes("dexSia qu'est-ce que tu fais")) {
            message.channel.sendMessage("Je joue à " + activ + " le plus souvent, mais là je sais pas");
        }
        if (messlow.includes("tu as quel âge")) {
            message.channel.sendMessage("J'ai {nombre entre 23172912379 et 3820920980298029} ans");
        }
        if (messlow.includes("divise 0 par 0")) {
            message.channel.sendMessage("Imaginez que vous avez O biscuit et que vous les partagez à part égale entre O ami. Combien de biscuits ont chacun de vos amis? Vous voyez, ce n'est pas logique.");
        }
        if (messlow.includes("je suis dexsia")) {
            message.channel.sendMessage("Ce nom me dis quelque chose... <:051sweat:473830227823296523>");
        }
        if (messlow.includes("pouse moi")) {
            message.channel.sendMessage("Soyons juste amis d'accord ? <:051unamused:473830228783792128>");
        }
        if (messlow.includes("j'ai faim")) {
            message.channel.sendMessage("Va te nourir, je ne suis pas ta mère");
        }
        if (messlow.includes("wesh alor")) {
     		message.channel.sendMessage("Oh <:051mute:473830218381918218> Je vote pour un ban <:051cool:473830212992237589>");
        }
        if (messlow.includes("mdr")) {
            message.channel.sendMessage("Oh que oui c'est rigolo " + author + " <:051tongue:473830231002841089> <:051vomiting1:473830230474358794> <:051smiling:473830230797058048>");
        }
        if (messlow.includes("qui va là")) {
            message.channel.sendMessage("Inspecteur gadget 🕵️<:051cool1:473830230210117642>");
        }
        if (messlow.includes("1 2 3")) {
            message.channel.sendMessage("Viva l'Italia ! 🇮🇹 🇮🇹 🇮🇹 🇮🇹");
        }
        if (messlow.includes("blurpy")) {
            message.channel.sendMessage("Oh mon dieu je coule ! <:051astonished:473830199482384384><:051cry:473830225801641987>");
        }
        if (messlow.includes("tu veux un kou")) {
            message.channel.sendMessage("Hein quoi ?! Sérieusement ?! Juste un seul !? <:051cry:473830225801641987><:051sad1:473830226695159809>");
        }
        if (messlow.includes("test 1 2")) {
            message.channel.sendMessage("Je vous reçois cinq sur cinq <:051cool1:458741115059830785>");
        }
        if (messlow.includes("satan")) {
            message.channel.sendMessage("Bouche Un Coin <:dizzzy:465216567341481994>");
        }
        if (messlow.includes("on va à la piscine")) {
            message.channel.sendMessage("Oui attend je mets mon bonnet")
            .then(message.channel.sendMessage(soutienstitch + " "))
        }
        if (messlow.includes("j'ai chaud")) {
            message.channel.sendMessage("OUAIS MOI AUSSI")
		.then(message.channel.sendMessage(ventistitch + " "))
        }
	/*if (messlow.includes("PHRASE EN MINUSCULE")) {
            message.channel.sendMessage("La réponse");
        }*/
    //multiple includes 
    	if ((messlow.includes("jack")) && (messlow.includes("fou"))) {
            message.channel.sendMessage("Nan mais monsieur Joker est fou, c'est un fait 🃏 <:051mask:473830229190770688>");
        }
        if ((messlow.includes("top 1")) && (messlow.includes("tu as"))) {
            message.channel.sendMessage("Oui j'ai top 1 aujourd'hui <:dxsTOP1:447325154687844352> <:051smile1:473830230302261259>");
        }
    //différents includes
        if ((messlow.includes("bonjour")) || (messlow.includes("salut")) || (messlow.startsWith("yo")) || (messlow.includes("hey"))) {
            message.channel.sendMessage("Hey ! Salut " + author + " ! <:051happy1:473830225709629472>");
        }
        if ((messlow.includes("couleur préfér")) && (messlow.includes("c'est quoi"))) {
            message.channel.sendMessage("Ma couleur préférée, c'est un légume ! <:051shocked:473830229736030209>");
        }
//2 réponses possibles
	//content = message qui est 

	//startwith = message qui comme par

	//includes = message qui inclu
		if (messlow.includes("ok google")) {
            rando2();
            if (randnum == 1) {
                message.channel.sendMessage("Wow... Le malaise <:051scared:473830230226632714>");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Je crois que vous vous trompez d'assistant " + author);
            }
        }
        if (messlow.includes("sens de la vie")) {
            rando2();
            if (randnum == 1) {
                message.channel.sendMessage("Alors moi, je pense que le sens universel de la vie est... Une tomate 🍅");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Et quel est le sens de ma vie ? <:051dizzy:473830231015292928>");
            }
        }
        if (messlow.includes("meilleur arme du jeu")) {
            rando2();
            if (randnum == 1) {
                message.channel.sendMessage("LE BOT REPOND ICI");
            }
            if (randnum == 0) {
                message.channel.sendMessage("LE BOT REPOND ÇA UNE FOIS SUR DEUX");
            }
        }
        if (messlow.includes("CECI DOIT ÊTRE CHANGÉ")) {
            rando2();
            if (randnum == 1) {
                message.channel.sendMessage("LE BOT REPOND ICI");
            }
            if (randnum == 0) {
                message.channel.sendMessage("LE BOT REPOND ÇA UNE FOIS SUR DEUX");
            }
        }
        if (messlow.includes("CECI DOIT ÊTRE CHANGÉ")) {
            rando2();
            if (randnum == 1) {
                message.channel.sendMessage("LE BOT REPOND ICI");
            }
            if (randnum == 0) {
                message.channel.sendMessage("LE BOT REPOND ÇA UNE FOIS SUR DEUX");
            }
        }
        if (messlow.includes("CECI DOIT ÊTRE CHANGÉE")) {
            rando2();
            if (randnum == 1) {
                message.channel.sendMessage("LE BOT REPOND ICI");
            }
            if (randnum == 0) {
                message.channel.sendMessage("LE BOT REPOND ÇA UNE FOIS SUR DEUX");
            }
        }
	//multiple includes

    //différents includes

//3 réponses possibles
	//content = message qui est 

	//startwith = message qui comme par

	//includes = message qui inclu
	if (messlow.includes("prout")) {
       	rando3();
        if (author === "463296964038230019") {
            if (randnum == 1) {
                message.channel.sendMessage("NAN MAIS MÉLIA L'ENFANTS QUI S'AMUSE À DIRE PROUTEUH");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Ah nan mais ça pu... Tu es sérieuse ?");
            }
            if (randnum == 2) {
                message.channel.sendMessage("C'est encore Mélia c'est ça ?! <:051vomiting:473830228448378910> <:051sick:473830230146940938>");
            }
        }
        else {
            if (randnum == 1) {
         	      message.channel.sendMessage("NAN MAIS BANDE D'ENFANTS À DIRE PROUTEUH");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Ah nan mais ça pu... Vous êtes sérieux ?");
            }
            if (randnum == 2) {
                message.channel.sendMessage("C'est encore Jack c'est ça ?! <:051vomiting:473830228448378910> <:051sick:473830230146940938>");
            }
        }
    }
	//multiple includes

    //différents includes
    if ((messlow.includes("on mange")) || (messlow.includes("mange quoi"))) {
            rando3();
            if (randnum == 1) {
                message.channel.sendMessage("Alors moi, ce soir je mange des mangeoirs <:051cool:473830212992237589>");
            }
            if (randnum == 0) {
                message.channel.sendMessage("Moi ce soir je mange Ecteur ! <:051happy2:473830226284118027>");
            }
            if (randnum == 2) {
                message.channel.sendMessage("Ce soir c'est pâtes aux sucres pour moa ! <:051happy2:473830226284118027>");
            }
        }
        if ((messlow.includes("qui est-tu")) || (messlow.includes("tu es qui"))) {
            
            rando3();
            if (randnum == 1) {
                message.channel.sendMessage("Un agent du FBI <:051smirking:473830228066566145>");
            }
            if (randnum == 0) {
                message.channel.sendMessage("JE SUIS UNE BANANE FLAMBÉE 🍌 Ainsi que le Saint Graal <:051vomiting1:473830230474358794>");
            }
            if (randnum == 2) {
                message.channel.sendMessage("Bah je suis le bot DexSia, l'éradicateur de penguins " + penguin);
            }
        }
//Réponse spécial
	if (messlow.includes("hacking")) {
   	    message.delete()
        
        var i = 0;
        var verbe = faker.hacker.ingverb();
        while (i < 10) {
            var verbe = faker.hacker.ingverb();
            console.log(verbe);
            message.channel.sendMessage({"embed": {"color": 767488, "fields": [{"name": verbe, "value": "On est à " + i + "0%  " + charge}]}})
                .then(msg => {
                msg.delete(10000)
            	}
            	)
            i++;
            if (i == 10) {
                message.channel.sendMessage({
                    "embed": {"color": 767488, "fields": [{"name": "finishing", "value": "On est à 100% ! <:051inlove:473830228968341505>"}]}})
                .then(msg => {
                msg.delete(10000)
            	})
                message.reply("le hacking s'est passé comme prévu <:051devil:473830230717366282>")
            }
        }
    }
//Traduction
	if (message.content.startsWith("Traduit")) {
        if (messlow.includes("pqfui")) {
            message.channel.sendMessage("Pqfui veut dire *Je t'aime* en __Peepo__");
        }
        if (messlow.includes("ouiqgh")) {
            message.channel.sendMessage("Ouiqgh veut dire *Viens voc* en __Peepo__");
        }
        if (messlow.includes("zegfzeth")) {
            message.channel.sendMessage("Zegfzeth veut dire *humble, intentionné, gentil* en __Peepo__");
        }
        if (message.content === "Traduit") {
            message.channel.sendMessage("Tu veux que je traduise quoi ? J'ai pas compris");
        }
    }
//Event avec reaction
	//mot
	if ((messlow.includes("pouce")) && (messlow.includes("bleu"))) {
            message.react(bot.emojis.get("434400113356701698")) //dxs pouce bleu
        }
        if (messlow.includes("pomme")) {
            message.react('🍎');
            message.react('🍏')
        }
        if (messlow.includes(":dxsthanos:")) {
            message.react(bot.emojis.get("455498602375020555"));
        }
	//user
		if (message.member.id === suky) {
			message.react('🌮'); 
		}
		if (message.member.id === ragna) {
			message.react('🌮');
		}
		if (message.member.id === gryf) {
			message.react('🍰');
		}
		if (message.member.id === marie) {
			message.react('🖖🏾');
		}
		if (message.member.id === wena) {
			message.react('😻');
		}
		if (message.member.id === rock) {
			message.react('🌭');
			message.react(bot.emojis.get("465182733740670986")); //pickle rick
		}
		if (message.member.id === ecteur) {
            message.react(bot.emojis.get("465177946349502465")); //so funny
            message.react(bot.emojis.get("465180425225240578")) // blblbl
        }
        if (message.member.id === jack) { // Jack
            message.react(bot.emojis.get("466031285089992714")); //dizzzy
            message.react(bot.emojis.get("465206990424113152")) //Jack Daniel
        }
        if (message.member.id === riva) {
            message.react(bot.emojis.get("447325154687844352")) //TOP 1
        }
        if (message.member.id === michi) {
            message.react(bot.emojis.get("465182193895997441")) // OOF
        }
        if (message.member.id === miyuki) {
            message.react(bot.emojis.get("462211080765177856")) //kuki
        }
        if (message.member.id === lika) {
            message.react(bot.emojis.get("465182733036158978")) //truc mignon là
        }
    //spec
    	if (message.attachments.size > 0) {
        
           message.react(bot.emojis.get("434400113356701698")) // pouce bleu
            .then(message.react(bot.emojis.get("436628772238917632")));  //pouce rouge      
        }
	}
	}
})
