const express = require("express")
const router = express.Router()
const Location = require('../models/Loaction')


router.get('/loc', async (req, res) => {
    const { latitude, longitude } = req.query;
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    console.log(latitude, longitude);
    
    // try {
    //     const newLoc = new Location({ latitude, longitude, url, status: 'yes' })

    //     newLoc.save((error) => {
    //         if (error) {
    //             console.log(error);
    //         } else {
    //             console.log('Location saved successfully!');
    //             res.status(200).send({ status: 200, message: 'done' })
    //         }
    //     });
    // } catch (error) {
    //     console.log(error);
    // }
})

router.get('/hello', async (req, res) => {
 console.log('hello');
})


module.exports = router