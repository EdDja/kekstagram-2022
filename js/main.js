// Получаем случайное целое число из переданного диапазона включительно
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Проверяем строку на максимальную длину
const checkStringLength = (string, maxLenght) => string.length <= maxLenght;

checkStringLength ('String', 5);
getRandomPositiveInteger(2, 20);
