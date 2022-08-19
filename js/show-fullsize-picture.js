import { isEscapeKey } from './util.js';

const COMMENTS_LIMIT = 5;
const body = document.querySelector('body');
const bigPicture = body.querySelector('.big-picture');
const bigPictureImage = bigPicture.querySelector('img');
const pictureCaption = bigPicture.querySelector('.social__caption');
const pictureLikesCount = bigPicture.querySelector('.likes-count');
const pictureCommentsCount = bigPicture.querySelector('.comments-count');
const commentsList = bigPicture.querySelector('.social__comments');
const commentTemplate = bigPicture.querySelector('.social__comment');
const bigPictureCommentsCount = bigPicture.querySelector('.social__comment-count');
const bigPictureCommentsLoader = document.querySelector('.comments-loader');
const bigPictureClose = bigPicture.querySelector('#picture-cancel');

const createCommentElement = ({id, avatar, name, message}) => {
  const commentElement = commentTemplate.cloneNode(true);

  commentElement.dataset.id = id;
  commentElement.querySelector('.social__picture').src = avatar;
  commentElement.querySelector('.social__picture').alt = name;
  commentElement.querySelector('.social__text').textContent = message;

  return commentElement;
};

const renderComments = (comments) => {
  const commentsFragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    commentsFragment.appendChild(createCommentElement(comment));
  });

  commentsList.appendChild(commentsFragment);
};

const loadComments = (comments) => {
  const splicedComments = comments.splice(0, COMMENTS_LIMIT);

  bigPictureCommentsLoader.classList.remove('hidden');
  renderComments(splicedComments);

  if (comments.length === 0) {
    bigPictureCommentsLoader.classList.add('hidden');
  }
};

const fillBigPicture = ({url, likes, description, comments}) => {
  bigPictureImage.src = url;
  pictureLikesCount.textContent = likes;
  pictureCommentsCount.textContent = comments.length;
  pictureCaption.textContent = description;

  commentsList.innerHTML = ''; // Удаляем дефолтные комментарии из разметки
  loadComments(comments);

  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  bigPictureCommentsCount.classList.add('hidden');

  document.addEventListener('keydown', onBigPictureEscKeydown);
  bigPictureClose.addEventListener('click', onBigPictureCloseClick);
  bigPictureCommentsLoader.addEventListener('click', () => loadComments(comments));
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
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

export {fillBigPicture};
