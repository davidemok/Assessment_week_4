const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneCookieButton")
const form = document.querySelector("form")
const animeContainer = document.querySelector('section')

const animeCallback = ({data: anime}) => createAnimeCard(anime)

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res=> {
            const data = res.data;
            alert(data);
        });
}

const createAnime = body =>{axios.post("http://localhost:4000/api/anime", body).then(animeCallback)}
const deleteAnime = id => axios.delete(`http://localhost:4000/api/anime/${id}`).then(animeCallback)
const updateAnime = id => axios.put(`http://localhost:4000/api/anime/${id}`).then(animeCallback)

function submitHandler(e){
    e.preventDefault();
    let anime = document.querySelector('#anime')
    createAnime(anime)
    console.log(anime)
    anime.value = ''
}


function createAnimeCard(anime){
    const animeCard = document.createElement('div')
    animeCard.classList.add('anime-card')
    animeCard.innerHTML = `<p>${anime}</p>`
    animeContainer.appendChild(animeCard)
}


complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
form.addEventListener('submit', submitHandler)
