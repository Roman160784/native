import { sum } from '../01'
import { mult } from '../01'
import { splitIntoWords } from '../01'

let a: number;
let b: number;
let c: number;

beforeEach(() => {
     a = 1;
     b = 2;
     c = 3;
})

test('sum should be correct', () => {

    let result1 = sum(a, b)

    expect(result1).toBe(3);

})

test('multiply should be correct', () => {
    let a = 1;
    let b = 2;
    let c = 3;

    let result2 = mult(a, b)

    expect(result2).toBe(2);

})

test('string should be correct', () => {
    let sent1 = 'Hello my friend!'
    let sent2 = 'js - the best programm language.'

    let result1 = splitIntoWords(sent1)
    let result2 = splitIntoWords(sent2)

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('friend');

    expect(result2.length).toBe(6);
    expect(result2[0]).toBe('js');
    expect(result2[1]).toBe('-');
    expect(result2[2]).toBe('the');
    expect(result2[3]).toBe('best');
    expect(result2[4]).toBe('programm');
    expect(result2[5]).toBe('language.');

})



