import gameEngine from '../index.js';

// правила игры
const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
// логика игры
const gameLogic = () => {
  const task = Math.round(Math.random() * 10 + 1);
  const correctAnswer = task % 2 === 0 ? 'yes' : 'no';
  return [task, correctAnswer];
};
const isEven = () => gameEngine(gameRules, gameLogic);
export default isEven;
