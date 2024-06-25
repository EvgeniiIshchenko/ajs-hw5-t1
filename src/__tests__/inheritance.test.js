import { types, Character, Bowman, Swordsman, Magician, Undead, Zombie, Daemon } from '../inheritance';

test('Testing Bowman class', () => {
    const result = new Bowman('test', 'Bowman');
    expect(result).toEqual({
        name: 'test',
        type: 'Bowman',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('Testing Swordsman class', () => {
    const result = new Swordsman('test', 'Swordsman');
    expect(result).toEqual({
        name: 'test',
        type: 'Swordsman',
        health: 100,
        level: 1,
        attack: 40,
        defence: 10
    });
});

test('Testing Magician class', () => {
    const result = new Magician('test', 'Magician');
    expect(result).toEqual({
        name: 'test',
        type: 'Magician',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
});

test('Testing Undead class', () => {
    const result = new Undead('test', 'Undead');
    expect(result).toEqual({
        name: 'test',
        type: 'Undead',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('Testing Zombie class', () => {
    const result = new Zombie('test', 'Zombie');
    expect(result).toEqual({
        name: 'test',
        type: 'Zombie',
        health: 100,
        level: 1,
        attack: 25,
        defence: 25
    });
});

test('Testing Daemon class', () => {
    const result = new Daemon('test', 'Daemon');
    expect(result).toEqual({
        name: 'test',
        type: 'Daemon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40
    });
});

test.each([
    [ 'no123456789' ],
    [ 'n' ]
])('Testing Name', (name) => {
    const result = () => {
        new Character(name, 'Daemon');
    };
    expect(result).toThrow('Имя персонажа должно быть длинне 2 символов и не превышать 10');
});

test('Testing Type', () => {
    const result = () => {
        new Character('test', 'test');
    };
    expect(result).toThrow('Выбран несуществующий класс персонажа');
});