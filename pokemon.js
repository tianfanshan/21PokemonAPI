


//-----------------------constante---------------------
const API_URL = "https://pokeapi.co/api/v2/pokemon/";
const pokemones = document.querySelector(".pokemon");
const formBuscar = document.getElementById("form");
//-----------------------------------------------------




//----------------axios--------------------------------
async function getPokemon(){
    try {
        const res = await axios.get(API_URL);
        const pokemon02 =res.data.results;
        console.log(pokemon02)
    } catch (error) {
        console.error(error)
    }
}
getPokemon()
//-------------------------------------------------------













//-----------Numero aleatorio---------------------------
const getRandomInt = (min,max) => {
    return Math.floor(Math.random()*(max - min)) + min;
}
let random = getRandomInt(1,21)
console.log(random)
//-------------------------------------------------------






    
    
