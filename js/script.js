const themeSwitch = document.getElementById("theme-switch");
const body = document.body;

themeSwitch.addEventListener("change", () => {
  body.classList.toggle("light");
  body.classList.toggle("dark");
});

const form = document.getElementById("locationForm");
const weatherInfo = document.getElementById("weather");
const pokemonSprite = document.getElementById("pokemonSprite");
const pokemonName = document.getElementById("pokemonName");

const weatherApiKey = "af14af2f2b5a20ca15e3e87553f191ab";
let lastPokemonName = "";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const location = document.getElementById("location").value;
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${weatherApiKey}`;

  try {
    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    const temp = weatherData.main.temp;
    const weatherDescription = weatherData.weather[0].main.toLowerCase();
    weatherInfo.textContent = `The weather is ${weatherDescription} in ${location} and the temperature is ${temp}°C.`;

    let pokemonType;
    if (weatherDescription.includes("rain")) {
      pokemonType = "electric";
    } else if (temp < 5) {
      pokemonType = "ice";
    } else if (temp >= 5 && temp < 10) {
      pokemonType = "water";
    } else if (temp >= 12 && temp < 15) {
      pokemonType = "grass";
    } else if (temp >= 15 && temp < 21) {
      pokemonType = "ground";
    } else if (temp >= 23 && temp < 27) {
      pokemonType = "bug";
    } else if (temp >= 27 && temp <= 33) {
      pokemonType = "rock";
    } else if (temp > 33) {
      pokemonType = "fire";
    } else {
      pokemonType = "normal";
    }

    const pokeUrl = `https://pokeapi.co/api/v2/type/${pokemonType}`;
    const pokeResponse = await fetch(pokeUrl);
    const pokeData = await pokeResponse.json();

    let randomIndex;
    let selectedPokemon;
    do {
      randomIndex = Math.floor(Math.random() * pokeData.pokemon.length);
      selectedPokemon = pokeData.pokemon[randomIndex].pokemon;
    } while (selectedPokemon.name === lastPokemonName);

    lastPokemonName = selectedPokemon.name;

    const selectedPokemonResponse = await fetch(selectedPokemon.url);
    const selectedPokemonData = await selectedPokemonResponse.json();

    pokemonSprite.src = selectedPokemonData.sprites.front_default;
    pokemonSprite.alt = selectedPokemonData.name;
    pokemonName.textContent = `You got a ${selectedPokemonData.name}, a ${selectedPokemonData.types[0].type.name} type pokemon!`;
  } catch (error) {
    console.error("Error:", error);
    weatherInfo.textContent = "Could not fetch data. Please try again.";
  }
});
