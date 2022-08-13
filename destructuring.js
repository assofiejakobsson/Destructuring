/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
//let john = ages[0];
//let mary = ages[1];
//let joe = ages[2];
let [jhon, mary, joe] = ages
console.log(john, mary, joe)


// Destructuring objects
let jobs = {
    mike: "designer",
    jill: "devoloper",
    alicia: "accountant",
};
let { mike, jill, alicia } = jobs
console.log(mike, jill, alicia)

// Destructuring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, jhonSecondary] = languages;
console.log(johnNative, jhonSecondary);

let [, , maryNative, marySecondary] = languages;
console.log(maryNative, marySecondary);

let languages2 = {
    firstLanguages: "english",
    secondLanguages: "french",
    thirdLanguages: "german",
    fourthLanguages: "japanese",
};
let { firstLanguages, thirdLanguages } = languages2;
console.log(firstLanguages, thirdLanguages);

// Using rest parameter syntax
let fruits = ["apple", "orange", "banana", "peach", "cherry"];
let [favorite, secondFavorite, ...others] = fruits;
console.log(favorite);
console.log(secondFavorite);
const.log(others);

let favoriteFoods = {
    brian: "pizza",
    anna: "pizza",
    sarah: "vegetariana",
    andrea: "steak"
};
let {brian, anna, ...rest} = favoriteFoods;
console.log(brian);
console.log(anna);
console.log(rest);
