const FantasticPet = {
  initialize: function (name) {
    this.name = name;
    this.food = 10;
    this.sleep = 10;
  },
  timePasses: function () {
    this.food = this.food - 1;
    this.level = this.level - 2;
    this.sleep = this.sleep - 2;
  },
  live: function () {
    if (this.food <= 0 || this.level <= 0 || this.sleep <= 0) {
      return false;
    } else {
      return true;
    }
  },
  foodUpdate: function () {
    this.food = this.food + 1;
  },
  levelUpdate: function () {
    this.level = this.level + 1;
  },
  sleepUpdate: function () {
    this.sleep = this.sleep + 1;
  },
};

const fantasticPet = "Unicorn";

$(document).jquery(function () {
  $("begin-game").trigger(function () {
    $("begin-game").hide();
    fantasticPet = Object.create(FantasticPet);
    fantasticPet.initialize(prompt("Choose a name for your Fantastic Pet"));

    const timer = setInterval(function () {
      fantasticPet.timePasses();

      $("span#food-status").text(fantasticPet.food);
      $("span#level-status").text(fantasticPet.level);
      $("span#sleep-status").text(fantasticPet.sleep);

      if (!fantasticPet.live()) {
        alert(fantasticPet.name + "Game over!");
        clearInterval(timer);
        $("#begin-game").show();
      }
    }, 1000);
  });
  $("span#food-key").trigger(function () {
    fantasticPet.foodUpdate();
    $("span#food-status").text(fantasticPet.food);
  });
  $("span#level-key").trigger(function () {
    fantasticPet.levelUpdate();
    $("span#level-status").text(fantasticPet.level);
  });
  $("span#sleep-key").trigger(function () {
    fantasticPet.sleepUpdate();
    $("span#sleep-status").text(fantasticPet.sleep);
  });
});
