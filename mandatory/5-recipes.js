/** 

The Recipe Card
Never forget another recipe!

Create an object to hold information on your favorite recipe. 

It should have properties for 

- Title (a string), 
- Servings (a number), and 
- Ingredients (an array of strings)

On separate lines (one console.log statement for each), log the recipe information so it looks like:

Mole
Serves: 2
Ingredients:
cinnamon
cumin
cocoa

You should write and log at least 5 recipes

**/

const recipes = {
	Title: 'spaghetti',
	Servings: 3,
	Ingredients: [
		'brown onions',
		'olive oil',
		'tomato',
		'basil',
		'garlic',
		'oregano',
		'pasta',
	],
};
// console.log(recipes.Title, Object.entries(recipes.Servings), recipes.Ingredients);
console.log(recipes.Title);
console.log(`Servings: ${recipes.Servings}`);
console.log('Ingredients:');
recipes.Ingredients.forEach((ingredient) => console.log(ingredient));
console.log('\n');

const recipes2 = {
	Title: 'Garlic fried rice with crispy pork',
	Servings: 2,
	Ingredients: [
		'peanut oil',
		'garlic cloves',
		'minced pork',
		'chilli bean sauce',
		'cooked jasmine rice',
	],
};

console.log(recipes2.Title);
console.log(`Servings: ${recipes2.Servings}`);
console.log('Ingredients:');
recipes2.Ingredients.forEach((ingredient) => console.log(ingredient));
console.log('\n');

const recipes3 = {
	Title: 'Peach and pancetta salad',
	Servings: 1,
	Ingredients: [
		'red wine',
		'vinegar',
		'peaches',
		'mint',
		'parsley',
		'basil',
		'cheese',
	],
};

console.log(recipes3.Title);
console.log(`Servings: ${recipes2.Servings}`);
console.log('Ingredients:');
recipes3.Ingredients.forEach((ingredient) => console.log(ingredient));
console.log('\n');

const recipes4 = {
	Title: 'Chopped chilli chicken stir fry',
	Servings: 4,
	Ingredients: [
		'sunflower oil',
		'purple eggplants',
		'spring onion',
		'chilli sauce',
		'Free Range Chicken Mince',
		'Steamed rice',
	],
};

console.log(recipes4.Title);
console.log(`Servings: ${recipes2.Servings}`);
console.log('Ingredients:');
recipes.Ingredients.forEach((ingredient) => console.log(ingredient));
console.log('\n');

const recipes5 = {
	Title: 'Raw pad Thai',
	Servings: 3,
	Ingredients: [
		'zucchini',
		'carrots',
		'white cabbage',
		'snow peas',
		'Thai basil leaves',
	],
};

console.log(recipes5.Title);
console.log(`Servings: ${recipes2.Servings}`);
console.log('Ingredients:');
recipes5.Ingredients.forEach((ingredient) => console.log(ingredient));
