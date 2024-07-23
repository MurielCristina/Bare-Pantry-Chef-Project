// Basic Ingredients Message
let basicIngredients =
  "Oil (olive and sunflower), butter, garlic, onions, oatmeal milk, chickpeas, light coconut cream, rice (jazmin and sushi), beans, lentils, flour, oatmeal, canned corn, canned tuna, soy sauce, arepa flour, pasta (in many ways), cornstarch, spices (truffled salt, garlic powder, cayenne pepper flakes, ground pepper, ground ginger, ground cumin, cumin, curry, oregano, onion flakes, cinnamon, ground cinnamon, ground sweet paprika, ground hot paprika, ground turmeric, chilli ), oyster sauce, wine (white and red), grainy mustard, maple syrup, vanilla flavor, sugar (powdered, brown and white), peanut butter, honey, wine vinegar, vinegar cream, rice vinegar, sesame oil, mirim, chai tea, coffee, wasabi paste, miso paste (white and red), hot sauces.";
function popUpBasicIngredients() {
  alert(basicIngredients);
}

let clickHere = document.querySelector(".ingridients-list");
clickHere.addEventListener("click", popUpBasicIngredients);

//Submit button funcionality
function generateRecepy(event) {
  event.preventDefault();
  alert("🪄 Making magic with what yo have! ");

  let fakeRecepy = `Ginger-Garlic Ground Meat Stir-Fry with Rice and Veggies</strong
          >
          <br /><br />
          Ingredients: <br />
          1 lb ground meat <br />
          2 tbsp olive oil <br />
          3 cloves garlic, minced <br />
          1 inch ginger, <br />
          minced 1 onion, <br />
          chopped 1 cup chopped peppers (tiny diced) <br />
          1 cup frozen peas <br />
          1 cup frozen asparagus chopped, <br />
          2 tbsp soy sauce <br />
          1 tbsp oyster sauce <br />
          1 tsp ground cumin <br />
          1 tsp ground ginger <br />
          1 tsp ground turmeric <br />
          1/2 tsp cayenne pepper flakes (optional for heat) <br />
          1 cup jasmine rice <br />
          2 cups water Salt and ground pepper to taste <br /><br />

          Instructions: <br /><br />
          Cook the Rice: Rinse 1 cup of jasmine rice under cold water until the
          water runs clear. In a medium saucepan, combine the rinsed rice and 2
          cups of water. Bring to a boil over high heat. Once boiling, reduce
          the heat to low, cover, and simmer for about 15 minutes, or until the
          water is absorbed and the rice is tender. Remove from heat and let it
          sit covered for another 5 minutes. <br /><br />

          Prepare the Stir-Fry: While the rice is cooking, heat 2 tbsp of olive
          oil in a large skillet or wok over medium-high heat. Add the minced
          garlic and ginger, and sauté for about 1 minute until fragrant. Add
          the chopped onion and cook until it becomes translucent. Add the
          ground meat to the skillet. Cook and stir until the meat is browned
          and cooked through. Stir in the chopped peppers, frozen peas, and
          frozen asparagus. Cook for another 5-7 minutes until the vegetables
          are tender. Add 2 tbsp of soy sauce, 1 tbsp of oyster sauce, 1 tsp
          ground cumin, 1 tsp ground ginger, 1 tsp ground turmeric, and cayenne
          pepper flakes if using. Mix well to combine all the flavors. Season
          with salt and ground pepper to taste. <br /><br />

          Serve: Fluff the cooked rice with a fork and divide it between two
          plates. Spoon the ginger-garlic ground meat stir-fry over the rice.
          Serve hot and enjoy your meal!`;

  new Typewriter("#recepy", {
    strings: fakeRecepy,
    autoStart: true,
    cursor: "",
    delay: 10,
  });
}

let ingredientFormElement = document.querySelector("#ingredient-form");
ingredientFormElement.addEventListener("submit", generateRecepy);
