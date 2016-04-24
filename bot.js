var botkit = require('botkit');

var controller = botkit.slackbot();

//Put token in environment
var bot = controller.spawn({token : process.env.nickbot_token}).startRTM();

controller.hears(['Dance\?'],'ambient',function(bot, message) {

	var restraurants = [
		'Shoal Crossing',
		'Paul\'s house',
	];

	var place = restraurants[Math.floor(Math.random()*restraurants.length)]
	bot.reply(message,place);
});
controller.hears(['lunch\?'],'ambient',function(bot, message) {

	var restraurants = [
		'Tacos',
		'Burgers',
		'Pizza',
		'Salads',
		'Sandwiches',
	];

	var place = restraurants[Math.floor(Math.random()*restraurants.length)]
	bot.reply(message,place);
});
controller.hears('Game','ambient',function(bot,message){
	confirm = function(response,convo) {
		convo.ask("Do you want to play a game?",[
		{	pattern:bot.utterances.yes,
			callback:function(response,convo){
				convo.say('Cool. I\'ll try to make one soon');
				convo.next();
			}
		},
		{	pattern:bot.utterances.no,
			callback:function(response,convo){
				convo.say('Ok. Less work for me.');
				convo.next();
			}

		}
		]);

	}
	bot.startConversation(message,confirm);
});

console.log("Hello World");