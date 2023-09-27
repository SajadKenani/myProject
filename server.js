const express = require("express");
const path = require("path")

const app = express();

app.get("/Static", express.static(path.resolve(__dirname, "Frontend", "Static")))

app.get("/signUp", (req, res) => {
    res.sendFile(path.resolve(__dirname, "Frontend", "index.html"))
})

app.listen(process.env.PORT || 5050, () => console.log("Starting..."));