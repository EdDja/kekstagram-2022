import { getRandomPositiveInteger, getRandomArrayElement } from './util.js';

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

const generateComment = () => ({
  id: getRandomPositiveInteger(1, 1000),
  avatar: `img/avatar-${getRandomPositiveInteger(AvatarsRange.MIN, AvatarsRange.MAX)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(AUTHOR_NAMES)
});

const generatePicture = (index = 1) => {
  const comments = Array.from({length: getRandomPositiveInteger(1, 5)}, generateComment);

  return {
    id: index - 1,
    url: `photos/${index}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomPositiveInteger(LikesRange.MIN, LikesRange.MAX),
    comments: comments
  };
};

const generatePictures = () => Array.from({length: PICTURES_COUNT}, (element, index) => generatePicture(index + 1));

export {generatePictures};
