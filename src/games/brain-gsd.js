/* eslint-disable no-restricted-syntax */
import gameEngine from '../index.js';

// правила игры
const gameRules = 'Find the greatest common divisor of given numbers.';
// логика игры
const gameLogic = () => {
  const nmb1 = Math.round(Math.random() * 40 + 1);
  const nmb2 = Math.round(Math.random() * 20 + 1);
  const task = `${nmb1} ${nmb2}`;
  let correctAnswer;
  // находим НОД

  const nod = () => {
    const arr1 = [];
    const arr2 = [];
    // делители первого числа
    for (let k1 = 1; k1 <= nmb1 / 2; k1 += 1) {
      if (nmb1 % k1 === 0) {
        arr1.push(k1);
      }
    }
    arr1.push(nmb1);
    // делители второго числа
    for (let k2 = 1; k2 <= nmb2 / 2; k2 += 1) {
      if (nmb2 % k2 === 0) {
        arr2.push(k2);
      }
    }
    arr2.push(nmb2);
    // алгоритм увеличения скорости
    arr1.reverse();
    arr2.reverse();
    for (const nod1 of arr1) {
      for (const nod2 of arr2) {
        if (nod1 === nod2) {
          correctAnswer = nod1;
          return correctAnswer;
        }
        // eslint-disable-next-line no-continue
        continue;
      }
    }
    return correctAnswer;
  };
  nod();
  return [task, correctAnswer];
};
const isGsd = () => gameEngine(gameRules, gameLogic);
export default isGsd;
