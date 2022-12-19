// импорт сторонней библиотеки
import readlineSync from 'readline-sync';
// функция приветствия
const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
// экспорт функции приветствия
export default greetingUser;
