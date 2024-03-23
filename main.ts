// Question 1: Install Node.js, TypeScript and VS Code on your computer/Laptop.
// Answer: Done

// Question 2: Personal Message: Store a person’s name in a variable and print a message to them,
// like “Hello Asharib, would you like to learn some TypeScript today?”

let myNamee:string = "Shabbir";
console.log(`Hello ${myNamee}, would you like to learn some TypeScript today?`);

// Question 3: Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase,
// uppercase, and titlecase.

let myFullName:string = "muHammad shAbbir";
console.log(myFullName.toLowerCase());
console.log(myFullName.toUpperCase());
console.log(myFullName.split(" ")[0][0].toUpperCase() + myFullName.split(" ")[0].slice(1).toLowerCase()
+ " " + myFullName.split(" ")[1][0].toUpperCase() + myFullName.split(" ")[1].slice(1).toLowerCase());

// Question 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// "Albert Einstein once said, “A person who never made a mistake never tried anything new.”"

let famousQuote:string = `"Muhammad Iqbal once said, “If faith is lost, there is no security and there is no life for him who does not adhere to religion.”`
console.log(famousQuote);

// Question 5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.

let famousPersonName:string = "Muhammad Iqbal";
let famousPersonMessage:string = `"${famousPersonName} once said, “If faith is lost, there is no security and there is no life for him who does not adhere to religion.”`;
console.log(famousPersonMessage);

// Question 6: Stripping Names: Store a person’s name, and include some whitespace characters at the
// beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name
// once, so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

let personName: string = "\t\n Muhammad Shabbir \n\n";
console.log(personName.trim());
console.log(personName.split(" ")[1] + personName.split(" ")[2]); // remove middle space

// Question 7: Number Eight: Write addition, subtraction, multiplication, and division
// operations that each result in the number 8. Enclose your operations in print statements.

console.log(`The addition of two number is: ${4 + 4}`);
console.log(`The subtraction of two number is: ${12 - 4}`);
console.log(`The multiplication of two number is: ${4 * 2}`);
console.log(`The division of two number is: ${16 / 2}`);

// Question 8: You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.

console.log(4 + 4);
console.log(12 - 4);
console.log(4 * 2);
console.log(16 / 2);
console.log(`${4 + 4}\n${12 - 4}\n${4 * 2}\n${16 / 2}`); // another way with one line

// Question 9: Favorite Number: Store your favorite number in a variable.
// Then, create a message revealing your favorite number. Print that message.

let favoriteNumber:number = 8;
console.log(`My Favorite Number: ${favoriteNumber}`);
console.log('My Favorite Number:' , favoriteNumber);// another way

// Question 10: Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
// If the programs are straightforward at this point, just add your name and the current date at the top of
// each program file. Then, write one sentence describing what the program does.

//Shabbir, 17/03/2024
//This program prints a personal message
let myName:string = "Muhammad Shabbir";
console.log(`Hello ${myName}, would you like to learn some TypeScript today?`);

// Question 11: Names: Store the names of a few of your friends in an array called names.
// Print each person’s name by accessing each element in the list, one at a time.

let myFriendsNames:string[] = ["Khadim", "Adil", "Burhan", "Abdullah"];
for (let i = 0; i < myFriendsNames.length; i++) {
    const element = myFriendsNames[i];
    console.log(element);
}

// Question 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name,
// print a message to them. The message should be the same for each person, but personalized with their name.

let myFriendsNames2:string[] = ["Khadim", "Adil", "Burhan", "Abdullah"];

for (let i = 0; i < myFriendsNames2.length; i++) {
    const element = myFriendsNames2[i];
    console.log(`My ${i + 1} Friend Name is ${element}`);
}
console.log("\n");
for (let name of myFriendsNames2) {
    console.log(`My Friend Name is ${name}`);
}

// Question 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
// and make a list that stores several examples. Use your list to print a series of statements about these items,
// such as “I would like to own a Honda motorcycle.”

let favoriteTransportationMode: string[] = ["Ducati superbike", "Harley-Davidson cruiser", "Kawasaki Ninja sportbike"];
favoriteTransportationMode.forEach(element => {
    console.log(`I would like to own a ${element}`);
});

// Question 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
// Make a list that includes at least three people you’d like to invite to dinner.
// Then use your list to print a message to each person, inviting them to dinner.

let invitePeoples: string[] = ["Khadim", "Shabbir", "Abdullah"];
invitePeoples.forEach(peoples => {
    console.log(`Dear ${peoples}, would you like to join me for dinner?`);
});

// Question 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to send
// out a new set of invitations with a replacement guest.

let invitePeoplesUpdate: string[] = ["Khadim", "Shabbir", "Abdullah"];

let unableToAttend: string = "Shabbir";
console.log(`${unableToAttend} can't make it to dinner`);

//Replace Guest
let newGuest:string = "Muhammad";
invitePeoplesUpdate[invitePeoplesUpdate.indexOf(unableToAttend)] = newGuest;

console.log(invitePeoplesUpdate);

//New Invitation
invitePeoplesUpdate.forEach(peoples => {
console.log(`Dear ${peoples},  would you like to join me for dinner?`);
})

// Question 16: More Guests: You've found a bigger dinner table, so there's room for more guests.

let guestList: string[] = ["Khadim", "Shabbir", "Ahmed" ,"Abdullah"];

guestList.push("Adil"); // add end of an array
guestList.unshift("Burhan"); // add beginning of an array
guestList.splice(Math.floor(guestList.length / 2), 0, "Hamza"); // add middle of an array

guestList.forEach(guests => {
    console.log(`Dear ${guests},  would you like to join me for dinner?`);
})

// Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
// and you can only invite two guests.

let newGuestList: string[] = ["Khadim", "Shabbir", "Ahmed", "Abdullah"];
console.log("Unfortunately, I can only invite two people for dinner.");

while (newGuestList.length > 2) {
  let removeGuest = newGuestList.pop();
  console.log(`Sorry ${removeGuest}, I can't invite you to dinner.`);
}

newGuestList.forEach((guests) => {
  console.log(`Dear ${guests},  You are still invited to dinner.`);
});
newGuestList.splice(0, newGuestList.length);
console.log(newGuestList);

// Question 18: Seeing the World: Think of at least five places you’d like to visit.

let worldPlaces: string[] = ["Saudia Arabia", "Dubai", "Turkey", "China", "USA"];

console.log("Orignal Order: ", worldPlaces);

console.log("Alphabetically Sort: ", [...worldPlaces].sort());

console.log("Orignal Order: ", worldPlaces);

console.log("Reverse Alphabetical Order: ", [...worldPlaces].slice().sort().reverse());

console.log("Orignal Order: ", worldPlaces);

worldPlaces.reverse();
console.log("Reverse Order: ", worldPlaces);

worldPlaces.reverse()
console.log("Orignal Order: ", worldPlaces);

worldPlaces.sort()
console.log("Sort in Alphabetical Order: ", worldPlaces);

worldPlaces.reverse()
console.log("Reverse in Alphabetical Order: ", worldPlaces);

// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message
// indicating the number of people you are inviting to dinner.

let dinnerGuestList: string[] = ["Khadim", "Shabbir", "Ahmed", "Abdullah"];

console.log(`I am inviting ${dinnerGuestList.length} people to dinner.`);

// Question 20: Think of something you could store in an array. For example, you could make a list of mountains,
// rivers, countries, cities, languages, or anything else you’d like. Write a program that creates
// a list containing these items.

let countriesList: string[] = ["Saudia Arabia", "Dubai", "Turkey", "United States", "China"];

countriesList.forEach(country =>{
    console.log(`I'd like to visit:`, country);
})

// Question 21: Think of something you could store in a TypeScript Object. Write a program that creates Objects
//  containing these items.

let carsData : {
    name: string;
    company: string;
    model: string;
}={
    name: "Toyota Camry",
    company: "Toyota",
    model: "Camry"
};

console.log(`Car Info: ${carsData.model} by ${carsData.company}, model ${carsData.model}`);

// Question 22: Intentional Error: Try to produce an array index error in one of your programs.
// Correct the error before finishing.

let studentsData: string[] = ["Khadim", "Shabbir", "Burhan", "Abdullah"];

console.log(studentsData[4]); // index error here
console.log(studentsData[3]); // correct this error

// Question 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.

let car: string = "Ferrari";

console.log("Is car == 'Ferrari'? I Predict True");
console.log(car == 'Ferrari'); // True

console.log("Is car != 'BMW'? I Predict True");
console.log(car != 'BMW'); // True

console.log("Is car === 'Ferrari'? I Predict True");
console.log(car === 'Ferrari'); // True

console.log("Is car.toLowerCase() == 'ferrari'? I Predict True");
console.log(car.toLowerCase() == 'ferrari'); // True

console.log("Is car.toUpperCase() == 'ferrari'? I Predict True");
console.log(car.toUpperCase() == 'FERRARI'); // True

console.log("Is car == 'Ferrari 296 GTB'? I Predict True");
console.log(car == 'Ferrari 296 GTB'); // false

console.log("Is car != 'Ferrari'? I Predict True");
console.log(car != 'Ferrari'); // false

console.log("Is car === Ferrari? I Predict True");
console.log(car !== 'Ferrari'); // false

console.log("Is car.toLowerCase() == 'ferrari'? I Predict True");
console.log(car.toLowerCase() == 'Ferrari'); // false

console.log("Is car.toUpperCase() == 'ferrari'? I Predict True");
console.log(car.toUpperCase() == 'fERRARI'); // false

// Question 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

// equality and inequality with strings
console.log("Apple" == "Apple"); // true
console.log("Apple".toLowerCase() == "Apple"); // false

// lower case
console.log("Apple".toLowerCase() == "apple"); // true
console.log("Apple".toLowerCase() != "apple"); // true

// Numerical tests
console.log("Apple" == "Apple"); // true
console.log("Apple" != "Apple"); // false
console.log(5 < 10); // true
console.log(20 < 10); // false
console.log(15 > 10); // true
console.log(2 > 10); // false
console.log(10 <= 10); // true
console.log(20 <= 10); // false
console.log(10 >= 10); // true
console.log(2 >= 10); // false

// "and" and "or" operators
console.log("Apple" === "Apple" && 5 < 10); // true
console.log("Apple" === "Apple" && 12 < 10); // false
console.log("Apple" === "Apple" || 15 < 10); // true
console.log("Apple" === "Apple".toLowerCase() || 12 < 10); // false

// item is in a array
let fruits: string[] = ["Apple", "Mango", "Banana"];
console.log("Is 'Mango' in fruits?");
console.log((fruits as any).includes("Mango"));

// item is not in a array
console.log("Is 'Grapes' in fruits?");
console.log((fruits as any).includes("Grapes"));

// Question 25: Alien Colors #1: Imagine an alien was just shot down in a game.
// Assign 'green', 'yellow', or 'red' to a variable called alien_color.

let allienCollors: string = "green";
let allienCollors2: string = "red";

if (allienCollors == "green") {
    console.log("You just earned 5 points!");
}
else{
    // No output because the condition is false
}

if(allienCollors2 == "green"){
    // No output because the condition is false
}

// Question 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.

let newAllienCollors: string = "green";

if (newAllienCollors == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else{
    console.log("You just earned 10 points!");
}

// Version that runs the else block:

let newAllienCollors2: string = "yellow";

if (newAllienCollors2 == "green") {
    console.log("You just earned 5 points for shooting the alien!");
}
else{
    console.log("You just earned 10 points!");
}

// Question 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.

let greenAlienVersion: string = "green";

if (greenAlienVersion == "green") {
    console.log("You earned 5 points!");
}
else if(greenAlienVersion == "yellow"){
    console.log("You earned 10 points!");
}
else if(greenAlienVersion == "red"){
    console.log("You earned 15 points!");
}

let yellowAlienVersion: string = "yellow";

if (yellowAlienVersion == "green") {
    console.log("You earned 5 points!");
}
else if(yellowAlienVersion == "yellow"){
    console.log("You earned 10 points!");
}
else if(yellowAlienVersion == "red"){
    console.log("You earned 15 points!");
}

let redAlienVersion: string = "red";

if (redAlienVersion == "green") {
    console.log("You earned 5 points!");
}
else if(redAlienVersion == "yellow"){
    console.log("You earned 10 points!");
}
else if(redAlienVersion == "red"){
    console.log("You earned 15 points!");
}

// Question 28: Stages of Life: Determine a person’s life stage with an if-else chain.

let personAge: number = 4;

if (personAge < 2) {
    console.log("the person is a baby.");
}
else if(personAge >= 2 && personAge < 4){
    console.log("the person is a toddler.");
}
else if(personAge >= 4 && personAge < 13){
    console.log("the person is a kid.");
}
else if(personAge >= 13 && personAge < 20){
    console.log("the person is a teenager.");
}
else if(personAge >= 20 && personAge < 65){
    console.log("the person is an adult.");
}
else if(personAge >= 65){
    console.log("the person is an elder.");
}
else{
    console.log("the person is an elder.");
}

// Question 29: Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
//  if statements that check for certain fruits in your array.

let favouriteFruits: string[] = ["Apple", "Mango", "Banana", "Grapes", "Pineapple"];

if ((favouriteFruits as any).includes("Apple")) {
  console.log(`You really like ${favouriteFruits[0]}!`);
} 
if ((favouriteFruits as any).includes("Mango")) {
  console.log(`You really like ${favouriteFruits[1]}!`);
} 
if ((favouriteFruits as any).includes("Banana")) {
  console.log(`You really like ${favouriteFruits[2]}!`);
}
if ((favouriteFruits as any).includes("Grapes")) {
    console.log(`You really like ${favouriteFruits[2]}!`);
}
if ((favouriteFruits as any).includes("Pineapple")) {
    console.log(`You really like ${favouriteFruits[2]}!`);
}

// Question 30: Hello Admin: Greet users differently, especially 'admin'.

let newUsernames: string[] = ['admin', 'shabbir123', 'khadim213', 'burhan234', 'adil567']

newUsernames.forEach(users => {
    if (users == 'admin') {
        console.log(`Hello ${users}, would you like to see a status report?`);
    } else if(users == 'shabbir123') {
        console.log(`Hello ${users}, would you like to perform a some task?`);
    }
    else if(users == 'khadim213') {
        console.log(`Hello ${users}, would you like to perform a some task?`);
    }
    else if(users == 'shabbir123') {
        console.log(`Hello ${users}, would you like to perform a some task?`);
    }
    else if(users == 'burhan234') {
        console.log(`Hello ${users}, would you like to perform a some task?`);
    }
    else if(users == 'adil567') {
        console.log(`Hello ${users}, would you like to perform a some task?`);
    }
    else{
        console.log(`Hello ${users}, thank you for logging in again.`);
    }
});

// Question 31: No Users: Ensure your user list isn’t empty.
let usernames: string[] = ['admin', 'shabbir123', 'khadim213', 'burhan234', 'adil567']

while(usernames.length){
    usernames.pop();
}

if(usernames.length === 0) {
    console.log("We need to find some users!");
}
else{
    // Greet users
}

// Question 32: Checking Usernames: Ensure uniqueness in usernames.

let currentUsers: string[] = ['admin', 'shabbir123', 'khadim213', 'burhan234', 'adil567']
let newUsers: string[] = ['admin', 'ahmed234', 'khadim453', 'burhan434', 'shabbir123']

newUsers.forEach(new_user => {
    if(currentUsers.some(current_users => current_users.toLowerCase() === new_user.toLowerCase() )){
        console.log(`${new_user} will need to enter a new username.`);
    }else{
        console.log(`${new_user} is available.`);
    }
})

// Question 33: Ordinal Numbers: Display numbers with their ordinal suffixes.

let num: number[] = [1,2,3,4,5,6,7,8,9];

num.forEach(number => {
    let suffix: string = "st";
    if (number === 1) {
        suffix = "st";
    }
    else if (number === 2) {
        suffix = "nd";
    }
    else if (number === 3) {
        suffix = "rd";
    }
    else if (number === 4) {
        suffix = "th";
    }
    else if (number === 5) {
        suffix = "th";
    }
    else if (number === 6) {
        suffix = "th";
    }
    else if (number === 7) {
        suffix = "th";
    }
    else if (number === 8) {
        suffix = "th";
    }
    else if (number === 9) {
        suffix = "th";
    }
    console.log(`${number}${suffix}`);
});

// Question 34: Pizzas: Share your favorite pizzas and express your love for them.

let pizzaFlavoures: string[] = ["Chicken Tikka", "Fajita", "Chicken Mughlai", "Chicken Fajita"];

pizzaFlavoures.forEach(falvours => {
    console.log(`I like ${falvours} pizza.`);
})
console.log('I really love pizza!');

// Question 35: Animals: Highlight animals with a common trait.

let animalsList: string[] = ["dog", "cat", "rabbit"];

animalsList.forEach(animal => {
    console.log(`A ${animal} would make a great pet.`)
})
console.log(`Any of these animals would make a great pet!`);

// Question 36: T-Shirt: Create a function for customizing t-shirts.

function makeShirt(size:string, message:string){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`)
}
makeShirt("Large Size", "Eat Sleep Code Repeat");

// Question 37: Large Shirts: Default values in make_shirt().

function makeShirts(size: string = "Large", message: string = "I Love TypeScript"){
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}

makeShirts();
makeShirts("Medium");
makeShirts("Small", "Eat Sleep Code Repeat");

// Question 38: Cities: Describing cities with a function.

function describeCity(cityName: string, countryName: string = "Pakistan"){
    console.log(`${cityName} is in ${countryName}`);
}

describeCity("Karachi");
describeCity("Lahore");
describeCity("Alberta", "Canada");

// Question 39: City Names: Formatting city-country pairs.

function cityCountry(city: string, country: string): string{
    let countryData: string = `${city}, ${country}`;
    return countryData;
}

let countryString: string = cityCountry("Lahore", "Pakistan");
console.log(countryString);// another way
console.log(cityCountry("Karachi","Pakistan"));
console.log(cityCountry("Alberta","Canada"));

// Question 40: Album: Create objects for music albums.

function makeAlbum(artistName: string, albumTitle: string, track?: number){
    let album = {artistName, albumTitle};
    if (track) {
        album['track'] = track;
    }
    return album;
}

console.log(makeAlbum("Artist One", "First Album"));
console.log(makeAlbum("Artist two", "Second Album", 8));
console.log(makeAlbum("Artist three", "Third Album"));

// Question 41: Magicians: Display magician names from an array.

let magiciansName: string[] = ["Khadim", "Shabbir", "Burhan"];

function showMagician(magician: string[]){
    magician.forEach(name => {
        console.log(name);
    });
}
showMagician(magiciansName);

// Question 42: Great Magicians: Add "the Great" to magician names.

function greatMagician(magicians: string[]){
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
        // console.log(magicians[i]);
    }
}
showMagician(magiciansName);
greatMagician(magiciansName)

// Question 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" list.

let magiciansNames: string[] = ["Khadim", "Shabbir", "Burhan"];

function showMagicians(magician: string[]){
    magician.forEach(name => {
        console.log(name);
    })
}

function greatMagicians(magician: string[]){
    let great_magician: string[] = [];
    magician.forEach(name => {
        great_magician.push(name + " the Great");
    });
    return great_magician;
}

showMagicians(magiciansNames);// show orignal names
let greatMagicianNames: string[] = greatMagicians(magiciansNames);
showMagicians(greatMagicianNames); // show modify names

// Question 44: Sandwiches: Summarize sandwich orders with varying ingredients.

function sandwich(...item: string []){
    console.log(`Making a sandwich with:${item.join(', ')}`);
}
sandwich("ham", "cheese");
sandwich("turkey", "lettuce", "tomato");
sandwich("avocado", "sprouts", "mustard", "mayo");

// Question 45: Cars: Create detailed car objects with flexible properties.

function carData(manufacturer: string, model: string, ...extras: [string, any][]): Object{
    let car = {
        manufacturer: manufacturer,
        model: model
    }
    extras.forEach(([key,value]) => car[key] = value);
    return car;
}


console.log( carData("Ferrari 488", "Ferrari S.p.A",["color", "red"], ["year", 2020]));