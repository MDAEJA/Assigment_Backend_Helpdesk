const mongoose = require("mongoose");

const dbConnection = ()=>{
    mongoose.connect("mongodb+srv://mdaejazahmed6692:aejaz@helpdesk.dq9gv.mongodb.net/?retryWrites=true&w=majority&appName=HelpDesk")
    .then(()=>{
        console.log("Successfully Connected To Mongodb !!!")
    })
    .catch((err)=>{
        console.log("error while mongodb : ",err)
    })
}

module.exports = dbConnection;