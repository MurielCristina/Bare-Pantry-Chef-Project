// Basic Ingredients Message
basicIngredients =
  "Oil (olive and sunflower), butter, garlic, onions, oatmeal milk, chickpeas, light coconut cream, rice (jazmin and sushi), beans, lentils, flour, oatmeal, canned corn, canned tuna, soy sauce, arepa flour, pasta (in many ways), cornstarch, spices (truffled salt, garlic powder, cayenne pepper flakes, ground pepper, ground ginger, ground cumin, cumin, curry, oregano, onion flakes, cinnamon, ground cinnamon, ground sweet paprika, ground hot paprika, ground turmeric, chilli ), oyster sauce, wine (white and red), grainy mustard, maple syrup, vanilla flavor, sugar (powdered, brown and white), peanut butter, honey, wine vinegar, vinegar cream, rice vinegar, sesame oil, mirim, chai tea, coffee, wasabi paste, miso paste (white and red), hot sauces.";

function popUpBasicIngredients() {
  alert(basicIngredients);
}

let clickHere = document.querySelector(".ingridients-list");
clickHere.addEventListener("click", popUpBasicIngredients);
