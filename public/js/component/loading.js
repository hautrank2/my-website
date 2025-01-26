export const createLoadingEl = () => {
  const loadingContainer = document.createElement('div');
  const loadingEl = document.createElement('div');
  loadingContainer.className =
    'loading-container h-full w-full flex justify-center items-center';
  loadingEl.className =
    'loading-element loading-spinner border-foreground/40 border-6 border-solid border-t-primary';
  loadingEl.style.borderWidth = '6px';
  loadingContainer.appendChild(loadingEl);

  return loadingContainer;
};
