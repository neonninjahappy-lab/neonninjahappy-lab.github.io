const API_KEY = "UCC_API_ROBINRICHARDSON";

const express = require("express");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const players = new Map();

function authenticate(req, res, next) {
    const apiKey = req.headers["x-ucc-api-key"];

    if (!apiKey || apiKey !== API_KEY) {
        return res.status(401).json({
            success: false,
            error: "Unauthorized"
        });
    }

    next();
}
