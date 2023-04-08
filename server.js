import { App } from 'uWebSockets.js';
import pug from 'pug';
const app = App();
app
	.get('/', (res, req) => res.end(pug.renderFile('views/index.pug')))
	.listen(80, (socket) => {
		if (socket) console.log('Server is running');
		else console.error('Error starting');
	});
