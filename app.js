//create first object
const adventurer = {
    name: "Azreal",
    hitPoints: 10,
    belongings: ["staff", "potions", "medicine"],
    companion: {
        name: "Fenrir",
        type: 'wolf',
        belongings: ['revival scrolls', 'potions', 'tome of wisdom']
    }
}

//access belongings property of adventurer object
console.log(adventurer.belongings);

//access the first belonging
console.log(`first belonging is ${adventurer.belongings[0]}`);

//iterate over an array inside of an object
for (let i = 0; i < adventurer.belongings.length; i++){
    console.log(adventurer.belongings[i]);
}

//access companion object within adventurer object
console.log(`My companion's name is ${adventurer.companion.name}.`);

//access array index within companion object wtihin adventurer object
console.log(`One of my companions belongings is ${adventurer.companion.belongings[1]}`);

// const movies = {
//     {
//         "title": "Fast and Furious: Tokyo Drift"
//     },
    
//     {

//     }
// }

//call a function within an object
const foo = {
    arr: ["foo", "bar"],
    obj: {
        prop: 'object property'
    },
    doSomething: () => {
        console.log("Something was done.");
    }
}
foo.doSomething();

//call a function within an array
const functionalArray = [
    [1, 2, 3],
    ['four', 'five', 'six'],
    () => {
        console.log("Call me and I'll answer!");
    }
];
functionalArray[2]();

//creating a class
class Character {
    constructor(name, age, strength, intelligence, health) {
        this.name = name;
        this.age = age;
        this.strength = strength;
        this.intelligence = intelligence;
        this.health = health;
        this.alive = true;
    }

    greet(){
        console.log("Hello!");
    }

    static greet2() {
        console.log("Static hello!")
    }

    greetwithParams(otherCharacter) {
        console.log(`Hello, ${otherCharacter}!`);
    }

    takeDamage() {
        this.health -= 1;
    }
}

//instantiating a class object
const me = new Character();

//type of Character = object
console.log(typeof me);

//access an object method
const you = new Character();
you.greet();

//access a static object method (can only be accessed via class and not the object instance)
//you.greet2() ---> will throw an error
Character.greet2(); // ---> Static hello!

//object method with params
const alexander = new Character();
alexander.greetwithParams('Herc');

//object instatiation from class with params
const manimar = new Character('Manimar', 27, 4, 7, 10);
console.log(manimar.name);
console.log(manimar.alive);

//update object property with class method
console.log(manimar.health);
manimar.takeDamage();
console.log(manimar.health);
