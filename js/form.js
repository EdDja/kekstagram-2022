import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const uploadForm = document.querySelector('#upload-select-image');
const fileUpload = document.querySelector('#upload-file');
const editModal = document.querySelector('.img-upload__overlay');
const editModalClose = document.querySelector('#upload-cancel');
const hashtagsInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


// Закрытие формы редактирования изображения
const closeEditModal = () => {
  editModal.classList.add('hidden');
  body.classList.remove('modal-open');
  uploadForm.reset();

  document.removeEventListener('keydown', onEditModalEscKeydown);
  editModalClose.removeEventListener('click', onCloseEditModalClick);
};

const onCloseEditModalClick = () => {
  closeEditModal();
};

const onEditModalEscKeydown = (evt) => {
  const focused = document.activeElement;

  if (focused !== hashtagsInput && focused !== commentInput && isEscapeKey(evt)) {
    evt.preventDefault();
    closeEditModal();
  }
};


// Открытие формы редактирования изображения
const onFileUploadChange = () => {
  editModal.classList.remove('hidden');

  document.addEventListener('keydown', onEditModalEscKeydown);
  editModalClose.addEventListener('click', onCloseEditModalClick);
};


fileUpload.addEventListener('change', onFileUploadChange);
