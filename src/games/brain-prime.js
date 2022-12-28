import gameEngine from '../index.js';

// правила игры
const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
// логика игры
const gameLogic = () => {
  const task = Math.round(Math.random() * 100 + 1);
  const arrIdealDivider = [1];
  if (task !== 1) {
    arrIdealDivider.push(task);
  }
  const arrRealDivider = [];
  for (let i = 1; i <= task; i += 1) {
    if ((task % i) === 0) {
      arrRealDivider.push(i);
    } else {
      // eslint-disable-next-line no-continue
      continue;
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
const isPrime = () => gameEngine(gameRules, gameLogic);
export default isPrime;
