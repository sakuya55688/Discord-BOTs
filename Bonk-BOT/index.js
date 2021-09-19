const Discord = require("discord.js");
const client = new Discord.Client();
const keepRunning = require("./server");


const bonkImage = {
	//title: 'Bonk Image',
	image: {
		url: 'https://i.imgur.com/lmrPJjL.png',
	},
};
const emojis = ["<:Miko_Think:869143667737251910>",
                 "<:Miko_Cry:869143651798884372>",
                 "<:Korone_White:869143616856150046>",
                 "<:Bonk_35P:868840804104405092>",
];

client.on("ready", () => {
  console.log(`Log in as ${client.user.tag}`);
});

client.on("message", msg => {
  if(msg.content.startsWith("bonk")){
    try {
      
      let targetMember = msg.mentions.members.first();
      
      if(targetMember){
         msg.channel.send(`Bonk <@${targetMember.user.id}>`);
         
         //console.log(targetMember.lastMessage);
         if(targetMember.lastMessage)
          targetMember.lastMessage.react(process.env['Bonk ID']);
      }
      msg.channel.send({embed:bonkImage});
      

    } catch(err) {
      console.error(err);
    }
    
	  //msg.react(process.env['Bonk ID']); //type \ in front of your emoji to get id
    //msg.channel.send({embed:bonkImage});
  }

  else if(msg.content.startsWith("lineover")){
    var messageID = msg.content.substring(msg.content.indexOf(" ") + 1, msg.content.length);
    console.log("messageID = " + messageID);

    
    msg.channel.messages.fetch({around: messageID, limit: 1}).then(message => {
        const fetchedMsg = message.first();

        for(const emoji of emojis){
          fetchedMsg.react(emoji);
        }
        fetchedMsg.react(process.env['Bonk ID']);
    });
    
  }
});

client.login(process.env['TOKEN']);
keepRunning();
