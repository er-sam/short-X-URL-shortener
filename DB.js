const { default: mongoose } = require("mongoose");



const ConnectDB = async()=>{
   await mongoose.connect('mongodb://127.0.0.1:27017/short-url')
}


module.exports = ConnectDB