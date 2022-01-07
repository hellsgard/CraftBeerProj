const router = require('express').Router();

const {Beer} = require('../persistence/models/beer');

router.get('/get/:id', (req, res) => {
    Beer.findById(req.params.id, (error, lizard) => {
        res.status(200).send(lizard);
    })
})