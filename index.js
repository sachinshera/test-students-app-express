const express = require("express");
const multer = require("multer");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
require("./database");

// use middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer().any());

// routes

app.use("/students", require("./routes/students.routes"));




// listen to port

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
