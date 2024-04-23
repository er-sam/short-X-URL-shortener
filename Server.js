const express = require("express");
const ConnectDB = require("./DB");
const urlRoutes = require('./Routes/urlRoutes')

const app = express();
const PORT = 8080;






app.use(express.json())
app.use("/url",urlRoutes )










ConnectDB()
.then(()=>{
    console.log("Db connected...")
})
app.listen(PORT,()=>{
    console.log(`App is running at ${PORT}`)
})