const dotenv = require("dotenv")
const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.json())
app.use(require('./router/auth'))
app.use(cors())
app.use(cors({
    origin: 'https://mumbra-news18.vercel.app'
  }));
  

dotenv.config({path: "./config.env"}) 
 
const PORT = process.env.PORT || 3001  // Getting from config.env file
require("./db/conn") // Connection File with Db

app.listen(PORT, () => {
    console.log("Server is running on port 3001");
})