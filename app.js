const prompt = require('prompt-sync')();
const username = prompt('What is your name? ');
console.log(`Your name is ${username}`);

const drink = prompt("Whats your favorite beverage? ")
console.log(`Your favorite beverage is ${drink}! Yay! Have a delicious sip to gear up for your amazing adventure!`)

const location = prompt("Do you prefer traveling to the woods, the ocean, or the desert? ")
console.log(`Awesome! You like to travel to the ${location}! Let's go now!`)

location.toLowerCase()
let woods = 'woods'
let ocean =  'ocean'
let desert = 'desert'
if (location === woods){
    // console.log("woods", woods)
    // console.log("location", location)
    // above two console logs used to troubleshoot else msg "if not getting a response" that kept popping up for input of woods, ocean, desert. Working now as long as all lower case.
    console.log("We're walking into the dense, verdant forest! Maybe there will be animals here.");
} else if (location === ocean){
    console.log("Oh sweet! The warm sand on my feet feels good. I wonder if we'll see dolphins.");
} else if (location === desert){
    console.log("Wow, it sure is dry and hot. Let's look for magical desert animals!");
} else {
    console.log("If not getting a response to further your game, check your spelling of woods, ocean, and desert. Make sure it's lower-case and try again.");
}

const animal = prompt("What is your favorite animal? ")
console.log(`Your favorite animal is a ${animal}. A magical ${animal} appeared and will now be your superhero friend on your journey. How did you get so lucky?!`)

    








