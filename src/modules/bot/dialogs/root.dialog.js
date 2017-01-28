import botBuilder from 'botbuilder';

const model = process.env.LUIS_MODEL;
const luisRecognizer = new botBuilder.LuisRecognizer(model);
const dialog = new botBuilder.IntentDialog({ recognizers: [luisRecognizer] });

const alarms = {};

dialog.matches('greeting', [
	(session, args) => {
		console.log(session, args);
	}
]);

dialog.onDefault(botBuilder.DialogAction.send("I'm sorry I didn't understand. I can only create & delete alarms."));

export default function (bot) {
	bot.dialog('/', dialog);
}