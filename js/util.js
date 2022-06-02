// Получение случайного целого числа из переданного диапазона включительно
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Поиск случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

// Проверка строки на максимальную длину
const checkStringLength = (string, maxLenght) => string.length <= maxLenght;

export {getRandomPositiveInteger, getRandomArrayElement, checkStringLength};
