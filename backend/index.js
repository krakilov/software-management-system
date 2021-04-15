const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

const port = config.get('port') || process.env.port;

async function start() {
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        app.listen(port, () => console.log(`App is running on port ${port}`));
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
}

start();