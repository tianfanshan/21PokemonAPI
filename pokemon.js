


//-----------------------constante---------------------
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemones = document.querySelector(".pokemon");
const formBuscar = document.getElementById("form");
//-----------------------------------------------------







//--------------------no funciona------------------------
const mostrarPokemon = (pokemon) => {
    pokemones.innerHTML = "";
    pokemon.forEach((pokemon03) => {
      pokemones.innerHTML += `
                  <div class="card col-lg-3 col-xs-12 col-md-6">
                      <div class="personaje">
                      <div class="card-body">
                      <h3 class="card-header">${pokemon03.name}</h3>
                      <img style="height: 200px; width: 100%; display: block;" src="${pokemon03.url}"  alt="Card image">
                      </div>
                      </div>
                      </div>
                       `;
    });
  };
//-------------------------------------------------------



//----------------axios--------------------------------
const getPokemon = async ()=> {
    try {
        const res = await axios.get(API_URL);
        const pokemon02 = res.data.results;
        mostrarPokemon(pokemon02)
    } catch (error) {
        console.error(error)
    }
}
getPokemon()
formBuscar.addEventListener("submit",getPokemon);
//-------------------------------------------------------









//-----------Numero aleatorio---------------------------
const getRandomInt = (min,max) => {
    return Math.floor(Math.random()*(max - min)) + min;
}
let random = getRandomInt(1,21)
console.log(random)
//-------------------------------------------------------






    
    
