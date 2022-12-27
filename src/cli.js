// импорт сторонней библиотеки
import readlineSync from 'readline-sync';
// функция приветствия
const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
// экспорт функции приветствия
export default greetingUser;
