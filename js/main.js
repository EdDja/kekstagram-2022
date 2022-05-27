/* eslint-disable no-console */
/* eslint-disable arrow-body-style */

const PICTURES_COUNT = 25;

const COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTIONS = [
  'Тестим новую камеру!',
  'Затусили с друзьями на море',
  'Как же круто тут кормят',
  'Отдыхаем...',
  'Цените каждое мгновенье. Цените тех, кто рядом с вами и отгоняйте все сомненья. Не обижайте всех словами......',
  'Вот это тачка!',
];

const AUTHOR_NAMES = [
  'Trisha',
  'Drew',
  'Mira',
  'Tim',
];

const LikesRange = {
  MIN: 15,
  MAX: 200,
};

const AvatarsRange = {
  MIN: 1,
  MAX: 6,
};

// Получение случайного целого числа из переданного диапазона включительно
const getRandomPositiveInteger = (a, b) => {
  const lower = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const upper = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Поиск случайного элемента в переданном массиве
const getRandomArrayElement = (elements) => {
  return elements[getRandomPositiveInteger(0, elements.length - 1)];
};

// Проверка строки на максимальную длину
const checkStringLength = (string, maxLenght) => {
  return string.length <= maxLenght;
};

const createComment = () => {
  return {
    id: getRandomPositiveInteger(1, 1000),
    avatar: `img/avatar-${getRandomPositiveInteger(AvatarsRange.MIN, AvatarsRange.MAX)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(AUTHOR_NAMES)
  };
};

const createPicture = (index = 1) => {
  const comments = Array.from({length: getRandomPositiveInteger(1, 5)}, createComment);

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(LikesRange.MIN, LikesRange.MAX),
    comments: comments
  };
};

const pictures = Array.from({length: PICTURES_COUNT}, (element, index) => createPicture(index + 1));

checkStringLength();
console.log(pictures);
