import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import botBuilder from 'botbuilder';
import router from './Router';

const app = express();
const apiV = process.env.API_VERSION;
const prefix = `/api/${apiV}/`;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (process.env.NODE_ENV !== 'production') {
	app.use(morgan('combined'));
}

app.use(prefix, router());

export default app;