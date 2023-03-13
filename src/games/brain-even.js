import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const runLogic = () => {
  const task = generateRandomNumber(1, 100);
  const correctAnswer = task % 2 === 0 ? 'yes' : 'no';
  return [task, correctAnswer];
};

const runEven = () => {
  run(description, runLogic);
};

export default runEven;
