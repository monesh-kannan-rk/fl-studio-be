const mongoose = require("mongoose")

const config = {
    "port": 5000,
    "database": async function(){
        mongoose.connect("mongodb://localhost:27017/fleet").then(()=>{
            console.log("db connected successfully")
        }).catch((e) => {
            console.log("db not connected")
        })
    }
}
module.exports = config