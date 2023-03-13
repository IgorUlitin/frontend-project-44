import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const description = 'What number is missing in the progression?';

const runLogic = () => {
  const arr = [];
  arr[0] = generateRandomNumber(0, 100);
  const dif = generateRandomNumber(0, 10);
  const arrLength = generateRandomNumber(5, 10);
  for (let i = 1; i < arrLength; i += 1) {
    arr[i] = arr[i - 1] + dif;
  }
  const absentIndex = generateRandomIndex(arr);
  const correctAnswer = String(arr[absentIndex]);
  arr[absentIndex] = '..';
  const task = arr.join(' ');
  return [task, correctAnswer];
};

const runProgression = () => {
  run(description, runLogic);
};

export default runProgression;
