// class Pegasus contains 2 types of pegasus, Pony and Unicorn
// the terminal should show name, years old and level

class Pegasus {
  constructor(name, yearold, level) {
    this._name = name;
    this._yearold = yearold;
    this._level = level;
  }

  get title() {
    return "${this._name} has ${this._yearold} years old.";
  }

  get age() {
    let date = new date();
    let age = date.getFullYear() - this.yearold;
    return age;
  }

  get status() {
    return level + 1;
  }

  sleep = 1;
  food = 1;
  water = 1;
  play = 1;
  energy = 1;

  _level() {
    console.log("Starting from Level ${this.level}.");
    this.level++;
  }
}

class Pony extends Pegasus {
  constructor(name, yearold, level, power) {
    super(name, yearold, level);
    this.magic = power;
  }

  magic = 5;

  energy() {
    console.log("{this.level} level reached. Well done!");
    this.play++;
    this.energy--;
  }

  play() {
    console.log("${this.name} is playing.");
    this.play++;
    this.energy--;
  }
}

class Unicorn extends Pegasus {
  constructor(name, yearold, level, skill) {
    super(name, yearold, level);
    this.ability = 5;
  }

  // ability = 5;

  sleep() {
    console.log("${this.name} is having a nap. Zzzz");
    this.sleep++;
    this.food--;
    this.ability++;
  }

  food() {
    console.log("${this.name} is having a snack, yum!");
    this.sleep--;
    this.food++;
  }

  water() {
    console.log("${this.name} is so thirsty.");
    this.water++;
    this.play--;
  }
}

let initQuestions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
  },
  {
    type: "list",
    name: "type",
    message: "What kind of Pegasus do you like?",
    choices: ["Rainbow Dash", "Apple Jack", "Pinkie Pie"],
  },
]

let loopQuestion = [
  {
    type: "rawlist",
    name: "action",
    message: `What do you want to do with your fantastic creature?`,
    choices: ["Give food", "Sleep", "Play", "Drink water", "Check energy level"],
  },
]

module.exports = {
  initQuestions,
  loopQuestion,
}

// energy = 20

let pinkiePie = new Pony("Pinkie Pie", 2015, 1, 3);
let appleJack = new Pony("Apple Jack", 2016, 1, 2);
let rainbowDash = new Unicorn("Rainbow Dash", 2017, 1);
//  let rainbowDash = new Pegasus("")

console.log(rainbowDash);
console.log(pinkiePie);
console.log(appleJack);

// rainbowDash.sleep();
// rainbowDash.water();
// rainbowDash.food();
// rainbowDash.play();
// rainbowDash.energy();

// pinkiePie.sleep();
// pinkiePie.water();
// pinkiePie.play();
// pinkiePie.energy();
// pinkiePie.food();
