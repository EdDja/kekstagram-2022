const Keycode = {
  ESC: 27,
  ENTER: 13,
  ARROW_LEFT: 37,
  ARROW_RIGHT: 39
};

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

// Создание любого элемента, опционально с классом и тектовым содержимым
const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  if (className) {
    element.classList.add(className);
  }
  if (text) {
    element.textContent = text;
  }
  return element;
};

// Выполнение действия по нажатию на кнопку
const checkActionCode = (evt, key, action) => {
  if (evt.keyCode === key) {
    action();
  }
};

export {Keycode, getRandomPositiveInteger, getRandomArrayElement, checkStringLength, createElement, checkActionCode};
