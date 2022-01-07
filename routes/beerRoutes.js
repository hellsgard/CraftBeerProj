const router = require('express').Router();

const {Beer} = require('../persistence/models/beer');

router.get('/get/:id', (req, res) => {
    Beer.findById(req.params.id, (error, beer) => {
        res.status(200).send(beer);
    })
});

router.get('/update/:id', (req, res) => {
    Beer.findByIdAndUpdate(req.params.id, req.body, (error, beer) => {
        if(error) {
            console.log(error);
        }
        else {
            res.status(202).send(`updated ${beer}.`);
        }
    })
});