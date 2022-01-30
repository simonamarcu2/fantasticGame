// lClasses and Objects

// OOP - Object Orianteted Programming
// DRY(Don't repeat Yourself)

// let favuriteFilm = "Avatar";
// let secondFilm = "Constantine";

// console.log(favuritefilm)

// favuriteFilm.length;
// favuriteFilm.toLocaleUpperCase();

// let myFilms = {
//   favouriteFilms: [
//     "Avatar",
//     "Constantine",
//     "Spiderman",
//     "Dora the explorer"
//   ],
//   favActors:[
//     "Angelina Jolie",
//     "The Rock",
//     "Tim Finn"
//   ]
// }


// let tracyTaste = {
//     favouriteFilms: [
//         "PS I love you",
//         "Silverling Playbooks",
//         "Home Alone"
//     ],
//     favActors: [
//         "Bradley Cooper"
//     ]
// }

// // class Taste {
// //   constructor(name, noFilmsWatched, favFilm) {
// //     this.name = name
// //     this.favFilm = favFilm
// //     this.filmsWatched = noFilmsWatched
// //   }

// //   favActors = ["Bradley Cooper"]
// //   isHuman = true
// //   atCodeNation = true
// // }

// // let bensTaste = new Taste("Ben", 1000, "Gladiator")
// // let tracyTaste = new Taste("Tracy", 600, "Silverlinings Playbook")
// // let danielTaste = new Taste("Daniel", 20, "Spider Man")

// // tracyTaste.favFilms.push("Home Alone")

// console.log(bensTaste)
// console.log(tracyTaste)
// console.log(danielTaste)

// class Dog {
//   constructor(name, age) {
//     this.name = name
//     this.age = age
//   }

//   hunger = 0
//   thirst = 0
//   energy = 10

//   play() {
//     console.log(${this.name} is having a great time playing! Woof!)
//     this.energy--
//   }
// }

// let fido = new Dog("Fido", 2)

// console.log(fido)
// fido.play()
// console.log(fido)

class Dog {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  hunger = 0
  thirst = 0
  energy = 10

  play() {
    console.log('${this.name} is having a great time playing! Woof!')
    this.energy--
  }

  birthday() {
    console.log('Happy birthday ${this.name}!')
    this.age++
  }
}

let fido = new Dog("Fido", 2)
console.log = (fido)
fido.play()
console.log(fido)
