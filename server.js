const express = require('express');
const cors = require("cors");
const config = require('./config/config');
const commitRoute = require("./routes")


const app = express();

config.database();

app.use(cors());
app.use("/", commitRoute)

app.get("/", (req, res) => {
    res.json({data: "hola"})
})

app.listen(config.port, ()=>{
    console.log(`App is listening on ${config.port}`)
})