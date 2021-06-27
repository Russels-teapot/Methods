import {
  Undead, Bowman, Magician, Zombie, Daemon, Swordsman, types,
} from '../Character';

test('short name', () => {
  expect(new Zombie('as', 'Zombie')).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('long name', () => {
  expect(new Bowman('asdasdasdasd', 'Bowman')).toThrow('Длина имени должна быть от 2 до 10 символов');
});

test('class does not exist', () => {
  expect(new Magician('asd', 'Necromancer')).toThrow('Несуществующий класс');
});

test('two-symbol name', () => {
  const daemon = new Daemon('Al', 'Daemon');
  expect(daemon.name).toBe('Al');
});

test('ten-symbol name', () => {
  const undead = new Undead('asdqwezxcr', 'Undead');
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

test('level-up', () => {
  const bowman = new Bowman('asd', 'Bowman');
  bowman.health = 0;
  expect(bowman.levelUp()).toThrow('Нельзя повысить левел умершего');
});

const swordsman = new Swordsman('asd', 'Swordsman');

test('damage', () => {
  swordsman.damage(10);
  expect(swordsman.health).toBe(91);
});

test('damage', () => {
  swordsman.health = 0;
  expect(swordsman.damage(10)).toThrow('Нельзя нанести урон умершему');
});
