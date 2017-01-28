import glob from 'glob';
import path from 'path';
import express from 'express';

export default function init() {
	const api = express();

	const routesPaths = path.resolve(process.cwd(), 'src/modules/**/*.routes.js');
	const routes = glob.sync(routesPaths);

	routes.forEach((routePath) => require(routePath).attach(api))
	return api;
}