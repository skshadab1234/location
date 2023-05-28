const express = require("express")
const router = express.Router()
const Location = require('../models/Loaction')


router.get('/loc', async (req, res) => {
    try {
      // Fetch user's location using the Geolocation API
      navigator.geolocation.getCurrentPosition(async (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
        console.log(latitude, longitude);
  
        // Insert the location into MongoDB
        const newLoc = new Location({ latitude, longitude, url, status: 'yes' });
        await newLoc.save();
        console.log('Location saved successfully!');
        res.status(200).send({ status: 200, message: 'done' });
      }, (error) => {
        console.error(error);
        res.status(500).send({ status: 500, message: 'Failed to fetch user location' });
      });
    } catch (error) {
      console.error(error);
      res.status(500).send({ status: 500, message: 'Internal server error' });
    }
  });
  

router.get('/hello', async (req, res) => {
 console.log('hello');
})


module.exports = router