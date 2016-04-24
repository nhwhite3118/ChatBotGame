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
