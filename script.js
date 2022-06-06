const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
const container = document.querySelector(".container");

async function fetchData() {
  for (i = 1; i < 151; i++) {
    let result = await fetch(BASE_URL + i);
    createCard(await result.json());
  }
}

fetchData();

function createCard(pokemon) {
  const card = document.createElement("div");
  card.className = "card";

  const img = document.createElement("img");
  img.src = pokemon.sprites.front_default;
  img.className = "card__img";

  const id = document.createElement("p");
  id.className = "card__id";
  let textId = (id.innerText = "#" + pokemon.id.toString().padStart(3, "0"));

  const name = document.createElement("p");
  name.innerText = pokemon.name;
  name.className = "card__name";

  const type = document.createElement("p");
  type.className = "card__type";
  type.innerText = "Type: " + pokemon.types[0].type.name;

  card.classList.add(pokemon.types[0].type.name);
  card.append(img, id, name, type);
  container.append(card);
}
