import readlineSync from 'readline-sync';
// игра на четность
const isEven = () => {
  // приветствие
  console.log('Welcome to the Brain Games!');
  let userName;
  // функция приветствия
  const greetingUser = () => {
    userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
  };
  // вызов функции приветствия
  greetingUser();
  // условие игры
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  // запуск цикла на 3 раунда
  for (let i = 0; i < 3; i += 1) {
    const nmb = Math.round(Math.random() * 10);
    console.log(`Question: ${nmb}`);
    const userAnswer = readlineSync.question('Your answer: ');
    // проверка правльности ответов
    if (nmb % 2 === 0 && userAnswer !== 'yes') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'yes'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else if (nmb % 2 === 1 && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    } else {
      console.log('Correct!');
    }
  }
  // конец игры при верном выполнении заданий
  console.log(`Congratulations, ${userName}!`);
};
export default isEven;
