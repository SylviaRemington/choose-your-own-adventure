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

if (location === woods){
    console.log(`You and your magical, superhero ${animal}, fly over the dense underbrush, and find 3 separate treasure chests: a pure gold chest, a pure silver chest, and a chest made of cotton candy. You can only choose one.`);
} else if (location === ocean){
    console.log(`You and your magical, superhero ${animal}, dive deep into the waves, and find 3 separate treasure chests: a pure gold chest, a pure silver chest, and a chest made of cotton candy. You can only choose one.`);
} else if (location === desert){
    console.log(`You and your magical, superhero ${animal}, twirl until you create a sandstorm, fly into the sky, and find 3 separate treasure chests: a pure gold chest, a pure silver chest, and a chest made of cotton candy. You can only choose one.`)
} 

const chest = prompt(`Do you and your ${animal} choose the chest of gold, silver, or cotton candy? `)
console.log("Great choice! Now you have won the greatest treasure there is!")

//I also wanted to do more with this project, but I ran out of time. I was figuring out how to use git and save to the repository. But I will work more on this this weekend.
//I want to create a game after they opened the chest where they find a magic wand that mistakenly gets used and they have to fight monsters for points.
//Also, I don't know yet how to go back to my original work after saving to a repository. So I initially created another file with the office hours TA. The link to that is below.
//https://github.com/SylviaRemington/choose-your-own-adventure/blob/main/app.js
//I still don't really get how to connect this VS Code to a git repository. I get up to git clone and do that, and then it doesn't work when I try to do the rest.
