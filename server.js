const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + "/dist/repository-finder"));

app.get("/*", (request, response) => {
    response.sendFile(__dirname + "/dist/respository-finder/index.html");
});

app.listen(PORT, () => {
    console.log("Servidor iniciado na porta " + PORT);
});