import { addClass, removeClass } from '../util.js';
const $ = document.querySelector.bind(document);

//#region Header

const body = $('body');
const header = $('header.page-header');
const scrollClass = 'bg-background/90 shadow-xl';

body.addEventListener('scroll', (event) => {
  if (body.scrollTop > 0) {
    addClass(header, scrollClass);
  } else {
    removeClass(header, scrollClass);
  }
});

//#endregion

// Hanlde F5 => scroll to #
document.addEventListener('DOMContentLoaded', () => {
  const hash = location.hash;
  if (hash) {
    const target = document.querySelector(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

