import './util.js';
import './data.js';
import './get-effect.js';
import './edit-picture.js';
import './validate-form.js';
import './show-fullsize-picture.js';
import { getData } from './api.js';
import { renderPictures } from './render-pictures.js';

getData(renderPictures);
