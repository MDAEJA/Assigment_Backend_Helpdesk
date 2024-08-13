const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true,
        enum : ["Customer","Admin","Others"]
    },
    priority : {
        type : String,
        required : true,
        enum : ["Low","Medium","High"]
    },
    Status : {
        type : String,
        required : false,
        default : "Pending"
    }
},{timestamps:true})

const userModel = mongoose.model("helpdesk",userSchema);

module.exports = userModel;