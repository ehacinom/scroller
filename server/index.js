
import db from './db';
import app from './app');
import { PORT } from '../secrets_constants';

var server = app.listen(PORT, (err) => {
    if (err) throw err;
    console.log('HTTP server listening on port', PORT);
    db.sync().then(() => {
        console.log('Postgres connected.');
    })
})

export default server;
