'use strict';
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH,DELETE');
    if (req.method === 'OPTIONS') {
        return res.send(204);
    }
    next();
});

app.get('/', (req, res) => {
    res.json("Oh, Hi Mark");
});

app.use('*', (req, res) => {
    return res.status(404).json({ message: 'Path Not Found' });
});

app.listen(process.env.PORT || 8080, () => {
    console.log(`Your app is listening on port ${process.env.PORT || 8080}`);
});

//I don't how this connects to cassandra here is a scaffold I use for mongo
//Since we are using cassandra I'll comment out and use a simpler
// let server;

// function runServer() {
//     return new Promise((resolve, reject) => {
//         mongoose.connect(DATABASE_URL, {useCreateIndex: true, useNewUrlParser: true}, err => {
//             if (err) {
//                 return reject(err);
//             }
//             server = app
//                 .listen(PORT, () => {
//                     console.log(`Your app is listening on port ${PORT}`);
//                     resolve();
//                 })
//                 .on('error', err => {
//                     mongoose.disconnect();
//                     reject(err);
//                 });
//         });
//     });
// }

// function closeServer() {
//     return mongoose.disconnect().then(() => {
//         return new Promise((resolve, reject) => {
//             console.log('Closing server');
//             server.close(err => {
//                 if (err) {
//                     return reject(err);
//                 }
//                 resolve();
//             });
//         });
//     });
// }

// if (require.main === module) {
//     runServer().catch(err => console.error(err));
// }

// module.exports = { app, runServer, closeServer };