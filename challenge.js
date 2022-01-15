class Pegasus {
  constructor(name, yearold, level) {
    this._name = name;
    this._yearold = yearold;
    this._level = level;
  }

  get name() {
    return "${this._name} has ${this._yearold} years old.";
  }

  get age() {
    let date = new Date();
    let age = date.getFullYear() - this.yearold;
    return age;
  }

  // get level() {
  //   return +1;
  // }

  sleep = 1;
  feed = 1;
  water = 1;
  play = 1;
  energy = 1;

  level() {
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
    this.ability = skill;
  }

  ability = 5;

  sleep() {
    console.log("${this.name} is having a nap. Zzzz");
    this.sleep++;
    this.feed--;
    this.ability++;
  }

  feed() {
    console.log("${this.name} is having a snack, yum!");
    this.sleep--;
    this.feed++;
  }

  water() {
    console.log("${this.name} is so thirsty.");
    this.water++;
    this.play--;
  }
}

// energy = 20

let pinkiePie = new Pony("Pinkie Pie", 2017, 1, 3);
let appleJack = new Pony("Apple Jack", 2015, 1, 2);
let rainbowDash = new Unicorn("Rainbow Dash", 2018, 1);
//  let rainbowDash = new Pegasus("")

console.log(rainbowDash);
console.log(pinkiePie);
console.log(appleJack);

rainbowDash.sleep();
rainbowDash.water();
rainbowDash.feed();
// rainbowDash.play();
// rainbowDash.energy();

// pinkiePie.sleep();
// pinkiePie.water();
pinkiePie.play();
pinkiePie.energy();
// pinkiePie.feed();
