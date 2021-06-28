import {
  Undead, Bowman, Magician, Zombie, Daemon, Swordsman, Character,
} from '../Character';

test('short name', () => {
  expect(() => new Character('a', 'Zombie')).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('long name', () => {
  expect(() => new Character('asdasdasdasd', 'Bowman')).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('class does not exist', () => {
  expect(() => new Character('asd', 'Necromancer')).toThrow('Несуществующий класс');
});

test('two-symbol name', () => {
  const daemon = new Character('Al', 'Daemon');
  expect(daemon.name).toBe('Al');
});

test('ten-symbol name', () => {
  const undead = new Character('asdqwezxcr', 'Undead');
  expect(undead.name).toBe('asdqwezxcr');
});

test('level-up', () => {
  const undead = new Undead('asdqwezxcr', 'Undead');
  undead.levelUp();
  expect(undead).toEqual({
    health: 100,
    level: 2,
    name: 'asdqwezxcr',
    type: 'Undead',
    attack: 30,
    defence: 30,
  });
});

test('level-up of dead', () => {
  const bowman = new Bowman('asd', 'Bowman');
  bowman.health = 0;
  expect(() => bowman.levelUp()).toThrow('Нельзя повысить левел умершего');
});



test('damage', () => {
  const swordsman = new Swordsman('asd', 'Swordsman');
  swordsman.damage(10);
  expect(swordsman.health).toBe(91);
});

test('damage of dead', () => {
  const swordsman = new Swordsman('asd', 'Swordsman');
  swordsman.health = 0;
  expect(() => swordsman.damage(10)).toThrow('Нельзя нанести урон умершему');
});
