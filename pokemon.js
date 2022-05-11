


//-----------------------constante---------------------
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemones = document.querySelector(".pokemon");
const botonParaPintar = document.getElementById("botonparapintar");
const inputBuscar = document.getElementById("buscar")
//-----------------------------------------------------







//--------------------no funciona------------------------
const mostrarPokemon = (pokemon) => {
    pokemones.innerHTML = "";
    
      pokemones.innerHTML += `
                  <div class="card col-lg-3 col-xs-12 col-md-6">
                      <div class="personaje">
                      <div class="card-body">
                      <h3 class="card-header">${pokemon.species.name}</h3>
                      <img style="height: 200px; width: 100%; display: block;" src="${pokemon.sprites.front_default}"  alt="Card image">
                      </div>
                      </div>
                      </div>
                       `;
  };
//-------------------------------------------------------


//-----------Numero aleatorio---------------------------
const getRandomInt = (min,max) => {
    return Math.floor(Math.random()*(max - min)) + min;
}
let random = getRandomInt(1,21)

//-------------------------------------------------------


//----------------axios--------------------------------
const getPokemon = async ()=> {
    try {
        const pokemonElegido = inputBuscar.value
        const pokemonRandom = pokemonElegido * random
        const res = await axios.get(API_URL + pokemonRandom);
        const pokemon02 =  await res.data;
        mostrarPokemon(pokemon02)
    } catch (error) {
        console.error(error)
    }
}

botonParaPintar.addEventListener("click",getPokemon);
//-------------------------------------------------------
















    
    
