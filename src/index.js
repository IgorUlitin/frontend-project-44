import readlineSync from 'readline-sync';

// общий движок
const gameEngine = (gameRules, gameLogic) => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  console.log(gameRules);
  // 3 раунда
  for (let i = 0; i < 3; i += 1) {
    const [task, correctAnswer] = gameLogic();
    // вывод задачи и получение ответа
    console.log(`Question: ${task}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // сравнение ответов
    if (String(correctAnswer) !== userAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameEngine;
