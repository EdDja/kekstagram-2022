import { Keycode, checkActionCode, createElement } from './util.js';

const AVATAR_SIZE = '35';
const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('img');
const pictureCaption = bigPicture.querySelector('.social__caption');
const pictureLikesCount = bigPicture.querySelector('.likes-count');
const pictureCommentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const bigPictureClose = bigPicture.querySelector('#picture-cancel');
const bigPictureCommentsCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsLoader = bigPicture.querySelector('.comments-loader');

const createCommentElement = (comment) => {
  const commentElement = createElement('li', 'social__comment');
  const commentAvatar = createElement('img', 'social__picture');
  const commentText = createElement('p', 'social__text');

  commentElement.dataset.id = comment.id;
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentAvatar.width = AVATAR_SIZE;
  commentAvatar.height = AVATAR_SIZE;
  commentText.textContent = comment.message;

  commentElement.appendChild(commentAvatar);
  commentElement.appendChild(commentText);

  return commentElement;
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    commentsFragment.appendChild(createCommentElement(comment));
  });

  commentsList.appendChild(commentsFragment);
};

const fillBigPicture = ({url, likes, description, comments}) => {
  bigPictureImage.src = url;
  pictureLikesCount.textContent = likes;
  pictureCommentsCount.textContent = comments.length;
  pictureCaption.textContent = description;

  commentsList.innerHTML = ''; // Удаляем дефолтные комментарии из разметки
  renderComments(comments);

  bigPicture.classList.remove('hidden');
  bigPictureCommentsCount.classList.add('hidden');
  bigPictureCommentsLoader.classList.add('hidden');
  body.classList.add('modal-open');

  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
};

const closeBigPicture = () => {
  bigPicture.classList.add('hidden');
  body.classList.remove('modal-open');

  document.removeEventListener('keydown', onBigPictureEscKeydown);
  bigPictureClose.removeEventListener('click', onBigPictureCloseClick);
};

const onBigPictureCloseClick = () => {
  closeBigPicture();
};

const onBigPictureEscKeydown = (evt) => {
  checkActionCode(evt, Keycode.ESC, closeBigPicture);
};

export {fillBigPicture};
