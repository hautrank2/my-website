const els = document.querySelectorAll('[data-tooltip]');

export const cssTooptips = (els) => {
  const isOverflow = (el) => {
    return el.scrollHeight > el.offsetHeight || el.scrollWidth > el.offsetWidth;
  };

  els.forEach((el) => {
    if (isOverflow(el)) {
      const data = el.getAttribute('data-tooltip');
      const containerEl = document.body;
      const tooltipEl = document.createElement('div');
      const tooltipTextEl = document.createElement('p');

      el.addEventListener('mouseenter', () => {
        tooltipEl.style.display = 'block';
        tooltipEl.className = `tooltip p-4 absolute rounded-lg bg-foreground/90 max-w-72`;
        tooltipTextEl.textContent = data;
        tooltipTextEl.className = 'text-background/60';
        tooltipEl.appendChild(tooltipTextEl);
        containerEl.appendChild(tooltipEl);
      });

      el.addEventListener('mousemove', (e) => {
        tooltipEl.style.top = `${e.pageY + 10}px`;
        tooltipEl.style.left = `${e.pageX + 10}px`;
      });

      el.addEventListener('mouseleave', () => {
        tooltipEl.style.display = 'none';
      });
    }
  });
};

export const initCssTooltip = () => cssTooptips(els);
