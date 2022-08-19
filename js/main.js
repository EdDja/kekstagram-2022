import './edit-picture.js';
import './validate-form.js';
import './upload-picture.js';
import { getData } from './api.js';
import { renderPictures } from './render-pictures.js';
import { initPicturesFilter } from './filter-pictures.js';

getData((pictures) => {
  renderPictures(pictures);
  initPicturesFilter(pictures);
});
