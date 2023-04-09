import { App } from 'uWebSockets.js';
import pug from 'pug';
const app = App();
app
	.get('/', (res, req) => res.end(pug.renderFile('views/index.pug')))
	.listen(3000, (socket) => {
		if (socket) console.log('Server is running');
		else console.error('Error starting');
	});
