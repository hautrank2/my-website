import { addClass } from '../util.js';

const $ = document;

const btns = $.querySelectorAll('button');

export const cssButton = (btn) => {
  const variant = btn.getAttribute('variant') || 'default';
  const color = btn.getAttribute('color') || 'default';
  const href = btn.getAttribute('href');
  let defaultClass = 'rounded-full text-sm px-5 py-2.5 me-2 mb-2 font-medium';

  let newClass = '';

  switch (variant) {
    case 'default':
      newClass =
        'text-primary  border border-neutral-600 hover:border-neutral-900 hover:border-primary hover:bg-primary/5 hover:text-primary bg-transparent focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';
      break;
    case 'primary':
      newClass =
        'text-white bg-primary hover:bg-primary/90 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';
      break;t
    case 'text':
      newClass =
        'text-neutral-950 hover:bg-primary/40 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800';
      break;
  }

  switch (color) {
    case 'danger':
      switch (variant) {
        case 'default':
          newClass =
            'text-danger-900 border border-danger-600 hover:border-danger-900 hover:border-danger hover:text-danger';
          break;
        case 'primary':
          newClass = 'text-white bg-danger hover:bg-danger/90';
          break;
        case 'text':
          newClass = 'text-danger-950 hover:bg-danger-200';
          break;
      }
      break;
  }

  addClass(btn, `${newClass} ${defaultClass}`);

  if (href) {
    btn.addEventListener('click', () => {
      window.location.href = href;
    });
  }
};

btns.forEach(cssButton);
