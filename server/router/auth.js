const express = require("express")
const router = express.Router()
const Location = require('../models/Loaction')

router.post('/loc', async(req,res) => {
    const {latitude, longitude} = req.body
    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
    
    try {
        const newLoc = new Location({latitude,longitude,url, status:'yes'})
        
    newLoc.save((error) => {
        if (error) {
          console.log(error);
        } else {
          console.log('Location saved successfully!');
          res.status(200).send({ status: 200, message: 'done' })
        }
      });
    } catch (error) {
        console.log(error);
    }
})


module.exports = router