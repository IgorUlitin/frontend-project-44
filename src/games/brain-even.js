import run from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const runLogic = () => {
  const task = Math.round(Math.random() * 10 + 1);
  const correctAnswer = task % 2 === 0 ? 'yes' : 'no';
  return [task, correctAnswer];
};
const isEven = () => run(description, runLogic);
export default isEven;
