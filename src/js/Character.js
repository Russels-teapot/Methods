// eslint-disable-next-line max-classes-per-file
const types = ['Bowman', 'Swordsman', 'Daemon', 'Magician', 'Undead', 'Zombie'];
class Character {
  health = 100;

  level = 1;

  constructor(name, type) {
    this.name = name;
    if (this.name.length < 2 || this.name.length > 10) {
      throw new Error('Длина имени должна быть от 2 до 10 символов');
    }
    this.type = type;
    if (!types.includes(this.type)) {
      throw new Error('Несуществующий класс');
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Нельзя повысить левел умершего');
    }
    this.level += 1;
    this.attack *= 1.2;
    this.defence *= 1.2;
    this.health = 100;
  }

  damage(points) {
    if (this.health > 0) {
      this.health -= points * (1 - this.defence / 100);
    } else throw new Error('Нельзя нанести урон умершему');
  }
}

class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 40;

  defence = 10;
}

class Magician extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 10;

  defence = 40;
}

class Undead extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 25;

  defence = 25;
}

class Zombie extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 40;

  defence = 10;
}

class Bowman extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 25;

  defence = 25;
}

class Daemon extends Character {
  constructor(name, type) {
    super(name, type);
  }

  attack = 10;

  defence = 40;
}

export {
  Undead, Daemon, Magician, Zombie, Swordsman, Bowman, Character, types,
};
