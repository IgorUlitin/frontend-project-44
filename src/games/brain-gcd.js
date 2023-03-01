/* eslint-disable no-restricted-syntax */
import run from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const runLogic = () => {
  const nmb1 = Math.round(Math.random() * 40 + 1);
  const nmb2 = Math.round(Math.random() * 20 + 1);
  const task = `${nmb1} ${nmb2}`;
  let correctAnswer;

  const calculateNod = () => {
    const arr1 = [];
    const arr2 = [];
    for (let k1 = 1; k1 <= nmb1 / 2; k1 += 1) {
      if (nmb1 % k1 === 0) {
        arr1.push(k1);
      }
    }
    arr1.push(nmb1);
    for (let k2 = 1; k2 <= nmb2 / 2; k2 += 1) {
      if (nmb2 % k2 === 0) {
        arr2.push(k2);
      }
    }
    arr2.push(nmb2);
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
const calculateGcd = () => run(description, runLogic);
export default calculateGcd;
