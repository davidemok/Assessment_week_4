const express = require("express");
const cors = require("cors");


const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortune, createAnime } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortune", getFortune);
app.post("/api/anime", createAnime);
app.delete("/api/anime/:id", deleteAnime);
app.put("/api/anime/:id", updateAnime);

app.listen(4000, () => console.log("Server running on 4000"));
