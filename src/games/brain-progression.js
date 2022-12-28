import gameEngine from '../index.js';

// правила игры
const gameRules = 'What number is missing in the progression?';
// логика игры
const gameLogic = () => {
  const arr = [];
  arr[0] = Math.round(Math.random() * 100);
  const dif = Math.round(Math.random() * 10);
  const arrLength = Math.round(Math.random() * 5 + 5);
  const absentIndex = Math.floor(Math.random() * arrLength);
  for (let i = 1; i < arrLength; i += 1) {
    arr[i] = arr[i - 1] + dif;
  }
  const correctAnswer = arr[absentIndex];
  arr[absentIndex] = '..';
  const task = arr.join(' ');
  return [task, correctAnswer];
};
const isProgression = () => gameEngine(gameRules, gameLogic);
export default isProgression;
