import run from '../index.js';
import { generateRandomNumber, generateRandomIndex } from '../utils.js';

const description = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (number1, operator, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    default:
      return number1 * number2;
  }
};

const generateRound = () => {
  const number1 = generateRandomNumber(0, 20);
  const number2 = generateRandomNumber(0, 10);
  const randomOperator = operators[generateRandomIndex(operators)];
  const task = `${number1} ${randomOperator} ${number2}`;
  const correctAnswer = String(calculate(number1, randomOperator, number2));
  return [task, correctAnswer];
};

const runCalc = () => {
  run(description, generateRound);
};

export default runCalc;
