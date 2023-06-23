const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const server = express();
const PORT = 8000;

// Use our modules
server.use(bodyParser.json()); // This solves getting the body of the request
server.use(cors()); // Solves communication by other software

const baseURL = "/api/v1/pokemons";
const PokemonRoutes = require("./routes/PokemonRoutes.js");

mongoose.connect(
  "mongodb+srv://beverlymateo11:Similar100@cluster0.2tjm1ux.mongodb.net/pokedexdb"
);

server.get("/", (request, response) => {
  console.log(`Online on port 8000`);
  response.send({ message: "Express server for Pokemon api" });
});

server.use(baseURL, PokemonRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
