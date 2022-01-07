const express = require('express');
const cors = require('cors');
const lizardRoutes = require('./routes/lizardRoutes.js');

const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://root:root@cluster0.vtwju.mongodb.net/beers_database/beers', {useNewUrlParser: true}, 
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

