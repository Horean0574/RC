const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(9000, () => {
    console.log("Server is running on port 9000.");
    console.log("View http://localhost:9000 to see the result.");
});
