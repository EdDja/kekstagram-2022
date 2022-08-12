import { fillBigPicture } from './show-fullsize-picture.js';

const renderPictures = (pictures) => {
  const picturesList = document.querySelector('.pictures');
  const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const pictureElement = pictureTemplate.cloneNode(true);

    pictureElement.querySelector('.picture__img').src = picture.url;
    pictureElement.querySelector('.picture__comments').textContent = picture.comments.length;
    pictureElement.querySelector('.picture__likes').textContent = picture.likes;

    picturesFragment.append(pictureElement);

    pictureElement.addEventListener('click', () => {
      fillBigPicture(picture);
    });
  });

  picturesList.appendChild(picturesFragment);
};

export {renderPictures};
