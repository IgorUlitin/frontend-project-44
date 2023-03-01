import run from '../index.js';

const description = 'What is the result of the expression?';
const runLogic = () => {
  const arrOperator = ['+', '-', '*'];
  const operator = arrOperator[Math.floor(Math.random() * arrOperator.length)];
  const nmb1 = Math.round(Math.random() * 20);
  const nmb2 = Math.round(Math.random() * 10);
  const task = `${nmb1} ${operator} ${nmb2}`;
  let correctAnswer;
  if (operator === '+') {
    correctAnswer = String(nmb1 + nmb2);
  } else if (operator === '-') {
    correctAnswer = String(nmb1 - nmb2);
  } else {
    correctAnswer = String(nmb1 * nmb2);
  }
  return [task, correctAnswer];
};
const calculateCalc = () => run(description, runLogic);
export default calculateCalc;
