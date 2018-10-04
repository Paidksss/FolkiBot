const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();


bot.on('ready', function() {
    bot.user.setGame("vec FoliiFolki");
    console.log("Connectedç");
});

bot.login(process.env.TOKEN);


bot.on('message',message => {
    if (message.content === + "**meurt**"){
        message.reply("**s'allonge sur lui tristement**");
    }
    if (message.content === "miaou"){
        message.reply("miaou");
    }
    
    if (message.content === "folki viens ici"){
        message.reply("**arrive joyeusement**");
        console.log("commande Salut effectué");
    }

    if (message.content === "caresse folki"){
        message.reply("**ronronne**");
    }
    
    if (message.content === "help"){ 
        var embed = new Discord.RichEmbed() 
            .setTitle("Help") 
            .setDescription("Les commandes du bot son") 
            .addField("help","Page d'aide", true) 
            .addField("folki viens ici","Le chat vas réagire", true)
            .addField("**s'assoit**","Le chat vas réagire", true)
            .addField("**meurt**","Le chat vas réagire", true)
            .addField("miaou","Le chat vas réagire", true)
            .addField("**caresse folki**","Le chat vas réagire", true)
            .setColor("0xFF0000") 
            .setFooter("Enjoy") 
        message.channel.sendEmbed(embed);
    }
    
}); 
           
