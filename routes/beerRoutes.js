const router = require('express').Router();

const { Beer } = require('../persistence/models/beer');

router.get("/getAll", (req, res) => {
    // Using the lizard model we imported, use the .find() function
    // .find() returns ALL DATA
    // pass in error first to access the data
    Beer.find((error, beer) => {
        res.status(200).send(beer);
    });
    console.log("get all accessed");
});

router.get('/get/:id', (req, res) => {
    Beer.findById(req.params.id, (error, beer) => {
        res.status(200).send(beer);
    })
});

router.put('/update/:id', (req, res) => {
    Beer.findByIdAndUpdate(req.params.id, req.body, {new : true}, (error, beer) => {
        if(error) {
            console.log(error);
        }
        else {
            res.status(202).send(`updated ${beer}.`)
        }
    })
});

router.post('/post', (req, res) => {
    const body = req.body;
    const beer = new Beer(req.body);
    beer.save().then((result) => {
        res.status(201).send(`${result.beer_name} has been added to database`);
    });  
});

router.delete('/delete/:id', (req, res) => {
    Beer.findByIdAndDelete(req.params.id, (error) => {
        res.status(202).send("Beer deleted");
    });
});

// router.put('/update/:id', (req, res) => {
//     console.log(req.body);
//     console.log(req.params.id);
//     res.status(201).send(`${req.params.id} has been updated`)
// });


module.exports = router;