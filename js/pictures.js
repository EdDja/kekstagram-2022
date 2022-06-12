import {createPictures} from './data.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const pictures = createPictures();
const picturesFragment = document.createDocumentFragment();

pictures.forEach(({id, url, likes, comments}) => {
  const picture = pictureTemplate.cloneNode(true);

  picture.dataset.id = id;
  picture.querySelector('.picture__img').src = url;
  picture.querySelector('.picture__comments').textContent = comments.length;
  picture.querySelector('.picture__likes').textContent = likes;

  picturesFragment.appendChild(picture);
});

picturesList.appendChild(picturesFragment);
