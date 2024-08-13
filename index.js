const express = require("express");
const dbConnection = require("./DbConnection/dbConnection");
const routes = require("./mvc/routes/userRoutes");
const cors = require("cors");

const corsOptions = {
    origin : "http://localhost:3000",
    credentials : true
}

const app = express();

app.use(cors(corsOptions));

app.use(express.json());

app.use('/create',routes);
app.use('/get',routes);
app.use('/data',routes);

dbConnection();

app.listen(10000,()=>{
    console.log("Server is connected at Port : 10000")
})