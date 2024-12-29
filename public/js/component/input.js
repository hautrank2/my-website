import { addClass } from '../util.js';

const $ = document;
const inputs = $.querySelectorAll('input');
const textareas = $.querySelectorAll('textarea');

export const cssInput = (input) => {
  const variant = input.getAttribute('variant') || 'default';
  const defaultClass = '';
  let newClass = '';

  switch (variant) {
    case 'default':
      newClass =
        'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5';
      break;
  }

  addClass(input, newClass);
};

[...inputs, ...textareas].forEach(cssInput);
