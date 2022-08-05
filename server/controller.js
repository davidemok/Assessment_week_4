const { response } = require("express");
const { request } = require("http");

const animeList = []
// let animeId = 1;

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["You have good taste in Pokemon", "You have nice shoes", "Cool hair"];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["Dogecoin will rise", "You will soon meet a good friend", "Love will enter your life", "An animal in need will cross your path", "you have talent for esports"];
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    createAnime: (req, res) => {
        let newAnime = {"id": animeId,
            "body": req.body}
        console.log(req.body)

        animeList.push(newAnime);
        console.log(newAnime);
        animeId++;
        res.status(200).send(animeList);
    },

    deleteAnime: (req, res) => {
        let index = animeList.findIndex(anime => anime.id === +request.params.id)
        animeList.splice(index, 1)
        res.status(200).send(animeList)
    },

    updateAnime: (req, res) => {
        let type = request.body.type;
        let index = animeList.findIndex(house => house.id === +request.params.id)
        if (type ==="plus"){
            animeList[index].score += 1
        }
        else if(type ==="minus"){
            animeList[index].score -=1
        }
        res.status(200).send(animeList)

    }

}