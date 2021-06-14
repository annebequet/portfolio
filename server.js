const express = require("express");
const path = require("path");

const app = express();

/* Ensure any requests prefixed with /src will serve our "frontend/src" directory */
app.use("/src", express.static(path.resolve(__dirname, "src")));

/* Redirect all routes to our "index.html" file */
app.get("/*", (req, res) => {
    res.sendFile(path.resolve("src", "index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("Server running..."));