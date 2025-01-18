import './component/modal.js';
import { cssButton } from './component/button.js';
import { cssInput } from './component/input.js';
import './component/layout.js';
import './pages/home.js';
import { cssTooptips, initCssTooltip } from './component/tooltip.js';

initCssTooltip();

const cssAfterDetech = (node, name, tagName, fns) => {
  // Check if the added node is an input element
  if (node.tagName === name) {
    fns(node);
  }
  // Handle nested input elements in added nodes
  if (node.querySelectorAll) {
    node.querySelectorAll(tagName).forEach(fns);
  }
};

const componentName = ['input', 'button'];

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      cssAfterDetech(node, 'INPUT', 'input', cssInput);
      cssAfterDetech(node, 'BUTTON', 'button', cssButton);
      //   switch (node.tagName) {
      //     case 'INPUT':
      //       break;
      //     case 'BUTTON':
      //       break;
      //   }
    });
  });
});

// Start observing the body for added nodes
observer.observe(document.body, {
  childList: true,
  subtree: true, // Observe changes to all descendants
});
