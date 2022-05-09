const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemones = document.querySelector(".pokemon");
const formBuscar = document.getElementById("form");


async function getPokemon(){
    try {
        const res = await axios.get(API_URL);
        const pokemon02 =res.data.results
        console.log(pokemon02)
    } catch (error) {
        console.error(error)
    }
}

getPokemon()




const mostrarPokemon = (pokemon02) => {
    pokemones.innerHTML = "";
    pokemon02.forEach((pokemon) => {
        pokemones.innerHTML += `
                  <div class="card col-lg-3 col-xs-12 col-md-6">
                      <div class="personaje">
                      <div class="card-body">
                      <h3 class="card-header">${pokemon.name}</h3>
                      <h5 class="card-title">${pokemon.status}</h5>
                      <img style="height: 200px; width: 100%; display: block;" src="${pokemon.image}"  alt="Card image">
                      </div>
                      </div>
                      </div>
                       `;
    });
  };


formBuscar.addEventListener('click',mostrarPokemon)






const getRandomInt = (min,max) => {
    return Math.floor(Math.random()*(max - min)) + min;
}

console.log(getRandomInt(1,151))








    
    
