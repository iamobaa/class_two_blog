const express = require("express")
const morgan = require("morgan")

// Declare app
const app = express();

// Routes
app.get("/", (req, resp) => {
    return resp.json({ message: "Welcome to my Blog" })
})

// Start app
app.listen(8090)