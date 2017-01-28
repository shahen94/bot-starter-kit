import botBuilder from 'botbuilder';
import rootDialog from './dialogs/root.dialog';

const connector = new botBuilder.ChatConnector({
	appId: process.env.BOT_APP_ID,
	appPassword: process.env.BOT_APP_PASSWORD
});

const bot = new botBuilder.UniversalBot(connector);

export default function () {
	rootDialog(bot);	
	return connector.listen();
}