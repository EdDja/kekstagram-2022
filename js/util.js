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

// Перемешивание элементов массива
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  return array;
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

// Проверка нажатой клавиши
const isEscapeKey = (evt) => evt.key === 'Escape';

// Создание и показ сообщения об ошибке запроса при загрузке данных с сервера
const showAlertMessage = (message, time) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, time);
};

const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};

const throttle = (callback, delayBetweenFrames) => {
  let lastTime = 0;

  return (...rest) => {
    const now = new Date();

    if (now - lastTime >= delayBetweenFrames) {
      callback.apply(this, rest);
      lastTime = now;
    }
  };
};

export {Keycode, getRandomPositiveInteger, getRandomArrayElement, checkStringLength, createElement, checkActionCode, isEscapeKey, showAlertMessage, debounce, throttle, shuffle};
