class Player {
  playTurn(warrior) {
    if (!this.initialized) {
      this.initialize(warrior);
    }
    if (warrior.feel().isEmpty()) {
      if (warrior.health() < 13 && !this.isUnderAttack(warrior)) {
        warrior.rest();
      } else {
        warrior.walk();
      }
    } else {
      warrior.attack();
    }
    this.finishTurn(warrior);
  }

  initialize(warrior) {
    this.initialized = true;
    this.health = warrior.health();
  }

  finishTurn(warrior) {
    this.health = warrior.health();
  }

  isUnderAttack(warrior) {
    return warrior.health() < this.health;
  }
}

global.Player = Player;
