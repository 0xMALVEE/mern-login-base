const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    firstName:{type: String, required: true},
    lastName:{type: String, required: true},
    email: {type: String, required: true},
    password: {type:String, required: false},
    profilePicture :{type: String, required:false},
    verified: {type: String, default:"false", required: true},
    verificationCode:{type:String},
    id: {type: String}
})

module.exports = mongoose.model("User", userSchema)