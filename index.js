require("dotenv").config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const { default: fetch } = require("node-fetch");
const fetch = (...args) =>
    import('node-fetch').then(({ default: fetch }) => fetch(...args));

const jwt = require("jsonwebtoken");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

//
app.get("/", (req, res) => {
    res.send("Hello World!");
});

//

//
app.listen(PORT, () => {
    console.log(`API server listening at http://localhost:${PORT}`);
});
