/* eslint-disable no-restricted-syntax */
import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const description = 'Find the greatest common divisor of given numbers.';

const runLogic = () => {
  const number1 = generateRandomNumber(1, 40);
  const number2 = generateRandomNumber(1, 20);
  const task = `${number1} ${number2}`;
  let correctAnswer;

  const calculateNod = () => {
    const arr1 = [];
    const arr2 = [];
    for (let k1 = 1; k1 <= number1 / 2; k1 += 1) {
      if (number1 % k1 === 0) {
        arr1.push(k1);
      }
    }
    arr1.push(number1);
    for (let k2 = 1; k2 <= number2 / 2; k2 += 1) {
      if (number2 % k2 === 0) {
        arr2.push(k2);
      }
    }
    arr2.push(number2);
    arr1.reverse();
    arr2.reverse();
    for (const nod1 of arr1) {
      for (const nod2 of arr2) {
        if (nod1 === nod2) {
          correctAnswer = String(nod1);
          return correctAnswer;
        }
      }
    }
    return correctAnswer;
  };
  calculateNod();
  return [task, correctAnswer];
};

const runGcd = () => {
  run(description, runLogic);
};

export default runGcd;
