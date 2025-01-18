import { addClass, removeClass } from '../util.js';
const $ = document.querySelector.bind(document);

const homePage = $('#homePage');

if (homePage) {
  const sectionIndex = homePage.querySelector('#sectionIndex');

  sectionIndex.querySelectorAll('li').forEach((li) => {
    li.addEventListener('click', (e) => {
      // e.preventDefault();
      // const targetId = li.getAttribute('href').substring(1);
      // const targetElement = homePage.querySelector(targetId);
      // if (targetElement) {
      //   window.scrollTo({
      //     top: targetElement.offsetTop,
      //     behavior: 'smooth', // Smooth scrolling
      //   });
      // }
    });
  });
}
