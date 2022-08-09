import { generatePictures } from './data.js';
import { fillBigPicture } from './fullsize.js';

const picturesList = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const mockPictures = generatePictures();

const createPictureElement = ({id, url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);

  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__img').dataset.id = id;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureElement.querySelector('.picture__likes').textContent = likes;

  return pictureElement;
};

const renderPictures = (pictures) => {
  const picturesFragment = document.createDocumentFragment();

  pictures.forEach((picture) => {
    const currentPicture = createPictureElement(picture);
    picturesFragment.appendChild(currentPicture);
  });

  picturesList.appendChild(picturesFragment);
};

picturesList.addEventListener('click', (evt) => {
  if (evt.target.classList.contains('picture__img')) {
    evt.preventDefault();
    fillBigPicture(mockPictures[evt.target.dataset.id]);
  }
});

renderPictures(mockPictures);
