import gameEngine from '../index.js';

// правила игры
const gameRules = 'What is the result of the expression?';
// логика игры
const gameLogic = () => {
  const arrOperator = ['+', '-', '*'];
  const operator = arrOperator[Math.floor(Math.random() * arrOperator.length)];
  const nmb1 = Math.round(Math.random() * 20);
  const nmb2 = Math.round(Math.random() * 10);
  const task = (`Question: ${nmb1} ${operator} ${nmb2}`);
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = nmb1 + nmb2;
  } else if (operator === '-') {
    correctAnswer = nmb1 - nmb2;
  } else {
    correctAnswer = nmb1 * nmb2;
  }
  return [task, correctAnswer];
};
const isCount = () => gameEngine(gameRules, gameLogic);
export default isCount;
