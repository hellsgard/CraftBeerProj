const express = require('express');
const cors = require('cors');
const beerRoutes = require('./routes/beerRoutes.js');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.log(new Date);
    next();
});

mongoose.connect('mongodb+srv://root:root@cluster0.vtwju.mongodb.net/beers_db', {useNewUrlParser: true}, 
(error) => {
    if(error) {
        console.log("Cant connect to DB :(");
    } else if (!error) {
        console.log("connected to DB :)");
    }
});

app.use('/beer', beerRoutes);

const server = app.listen(5015, () => {
    console.log(`server started on port 5015`);
});

