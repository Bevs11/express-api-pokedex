const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const server = express();
const PORT = 8000;

dotenv.config();

// Use our modules
server.use(bodyParser.json()); // This solves getting the body of the request
server.use(cors()); // Solves communication by other software

const baseURL = "/api/v1/pokemons";
const PokemonRoutes = require("./routes/PokemonRoutes.js");

mongoose.connect(process.env.MONGO_URI);

server.get("/", (request, response) => {
  console.log(`Online on port 8000`);
  response.send({ message: "Express server for Pokemon api" });
});

server.use(baseURL, PokemonRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
