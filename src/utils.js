const generateRandomNumber = (min, max) => min + Math.floor(Math.random() * (max - min));

const generateRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

export { generateRandomNumber, generateRandomIndex };
