import './config';
import app from './lib/express';

const server = app.listen(process.env.PORT, () => {
	console.log(`Listening sever on port: ${server.address().port}`);
});