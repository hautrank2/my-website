import { addClass } from '../util.js';

document.addEventListener('click', (event) => {
  // trigger
  const trigger = event.target.closest('[modal-trigger]');
  const container = document.querySelector('body');

  if (trigger) {
    const modalId = trigger.getAttribute('modal-target');
    const modal = document.getElementById(modalId);

    if (modal) {
      container.appendChild(modal);

      modal.classList.remove('hidden');
      modal.classList.add(
        ...'bg-black/60 flex justify-center items-center overflow-auto z-50 fixed inset-0'.split(
          ' '
        )
      );

      const okTrigger = modal.querySelector('[modal-ok]');
      const contentModal = modal.querySelector('.modal-content');
      const headerModal = modal.querySelector('.modal-header');
      const bodyModal = modal.querySelector('.modal-body');
      const footerModal = modal.querySelector('.modal-footer');
      const titleModal = modal.querySelector('.modal-title');

      if (contentModal) {
        addClass(
          contentModal,
          'bg-neutral-50 rounded-lg w-full max-w-2xl animate-open'
        );
        // addClass(contentModal, )
      }

      if (headerModal) {
        headerModal.classList.add(...'pt-4 px-4 relative'.split(' '));
        const closeBtn = document.createElement('button');
        closeBtn.setAttribute('modal-close', modalId);
        closeBtn.setAttribute('type', 'button');
        closeBtn.classList.add(
          ...'modal-close absolute right-4 top-4'.split(' '),
          modalId
        );
        const closeBtnIcon = document.createElement('span');
        closeBtnIcon.classList.add('text-2xl', 'bx', 'bx-x');
        headerModal.appendChild(closeBtn);
        closeBtn.appendChild(closeBtnIcon);
      }

      if (bodyModal) {
        bodyModal.classList.add(...'p-4'.split(' '));
      }

      if (footerModal) {
        footerModal.classList.add(...'px-4 pb-4'.split(' '));
      }

      if (titleModal) {
        titleModal.classList.add(...'modal-title'.split(' '));
      }

      const closeTriggers = modal.querySelectorAll('[modal-close]');
      closeTriggers.forEach((closeTrigger) => {
        if (closeTrigger) {
          closeTrigger.addEventListener('click', () => {
            modal.classList.add('hidden');
          });
        }
      });

      if (okTrigger) {
        okTrigger.addEventListener('click', () => {
          modal.classList.add('hidden');
        });
      }
    }
  }
});
