const express = require("express");
const app = express() ; 
app.use(express.json());
const db_connect = require("./connect_db");
require("dotenv").config();
db_connect();

app.use("/user", require("./routes/user"));
app.listen(process.env.PORT , 
    (err) => err?console.log(err): console.log("server is running !")
    );


