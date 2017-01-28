import { Router } from 'express';
import botConnector from './botConnector';

const router = new Router();
export function attach(app, prefix) {
	router.post('/', botConnector());

	app.use('/bot', router);
}