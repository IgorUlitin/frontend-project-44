import run from '../index.js';
import { generateRandomNumber } from '../utils.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const runLogic = () => {
  const task = generateRandomNumber(1, 100);
  const arrIdealDivider = [1];
  if (task !== 1) {
    arrIdealDivider.push(task);
  }
  const arrRealDivider = [];
  for (let i = 1; i <= task; i += 1) {
    if ((task % i) === 0) {
      arrRealDivider.push(i);
    }
  }
  let correctAnswer;
  if (arrIdealDivider[1] === arrRealDivider[1] && arrIdealDivider[2] === arrRealDivider[2]) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return [task, correctAnswer];
};

const runPrime = () => {
  run(description, runLogic);
};

export default runPrime;
