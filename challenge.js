class Pegasus {
  constructor(name, age, level){
    this.name = name
    this.age = age
    this.level = level
  }

  get name() {
    return'${this.name}'
  }

  get age() {
    let date = new Date()
    let age = date.getFullYear() - this.age
    return age
  }

  get level() {
    return'1'
  }

  sleep = 1
  feed = 2
  water = 2
  play = 1
  energy = 1
  
  class Pony extends Pegasus {
  constructor(name2, age2, level2, power){
      super(name2, age2, level2)
      this.magic = power
    }
  }

  class Unicorn extends Pegasus {
  constructor(name, age, level, skill){
      super(name, age, level)
      this.ability = skill
    }
  }

    energy = 20

  sleep() ;
    console.log('${this.name} is having a nap. Zzzz')
    this.sleep++
    this.feed--
  

  // feed() {
  //   console.log('${this.name} is having a snack, yum!')
  //   this.sleep--
  //   this.feed++
  // }

  // water() {
  //   console.log('${this.name} is so thirsty.')
  //   this.water++
  //   this.play--
  // }

  // play() {
  //   console.log('${this.name} is playing.')
  //   this.play++
  //   this.energy--
  // }

  energy() ;
    console.log('{this.level} reached. Well done!')
    this.play--
    this.energy++
}



let RainbowDash = new Unicorn("Rainbow Dash", 2018, 1)
//  let RainbowDash = new Pegasus("")
console.log(RainbowDash.name2)
RainbowDash.sleep()
RainbowDash.water()
RainbowDash.play()
RainbowDash.feed()
RainbowDash.energy()
