// Basic Ingredients Message
let basicIngredients = `Oil (olive and sunflower), butter, garlic, onions, oatmeal milk, chickpeas, light coconut cream, rice (jazmin and sushi), beans, lentils, flour, oatmeal, canned corn, canned tuna, soy sauce, arepa flour, pasta (in many ways), cornstarch, spices (truffled salt, garlic powder, cayenne pepper flakes, ground pepper, ground ginger, ground cumin, cumin, curry, oregano, onion flakes, cinnamon, ground cinnamon, ground sweet paprika, ground hot paprika, ground turmeric, chilli ), oyster sauce, wine (white and red), grainy mustard, maple syrup, vanilla flavor, sugar (powdered, brown and white), peanut butter, honey, wine vinegar, vinegar cream, rice vinegar, sesame oil, mirim, chai tea, coffee, wasabi paste, miso paste (white and red), hot sauces`;
function popUpBasicIngredients() {
  alert(basicIngredients);
}

let clickHere = document.querySelector(".ingridients-list");
clickHere.addEventListener("click", popUpBasicIngredients);

// Ingredients Avalibles
let ingredientFormElement = document.querySelector("#ingredient-form");

// API integration (IA)
let apiKey = "73050fa355794447f81ab5349190dotd";

let context = `You have a partner and love to cook for both but your always forgot
 to go to the supermarket. The ingredients you always have are:
 ${basicIngredients}. Please follow the "Basic instructions"`;

function generateRecepy(event) {
  event.preventDefault();

  let ingredientsInput =
    ingredientFormElement.querySelector('input[type="text"]').value;

  let prompt = `
 Please tell me what would you cook (for you and your partner) if
 in adition to those ingredients you also have: ${ingredientFormElement}. Basic 
 instructions: Your mission is to generate a full recepy in basic HTML form. At the 
 end of the recepy allways sign it as 'Generated by SheCodes AI' inside a <strong>`;

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("🪄 Making magic with what yo have!");
  console.log(`Context: ${context}`);
  console.log(`Prompt: ${prompt}`);

  axios.get(apiUrl).then(displayRecepy);
}

function displayRecepy(response) {
  console.log("Recepy generated");
  magicRecepy = response.data.answer;
  new Typewriter("#recepy", {
    strings: magicRecepy,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

ingredientFormElement.addEventListener("submit", generateRecepy);
