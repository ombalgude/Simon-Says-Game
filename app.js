const express = require("express");

const app = express();
app.set("view engine", "ejs");
const port = 8080;

// Middleware to serve static files from the "public" directory
app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`app listening on port ${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/simon.html");
});
