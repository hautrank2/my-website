export const addClass = (element, newClass) => {
  if (!element || !newClass) return; // Ensure valid input
  // Split newClass into an array to handle multiple classes
  const newClasses = newClass.split(' ');
  // Add each class if it doesn't already exist
  newClasses.forEach((cls) => {
    if (cls && !element.classList.contains(cls)) {
      element.classList.add(cls);
    }
  });
};

export const removeClass = (element, classToRemove) => {
  if (!element || !classToRemove) return; // Ensure valid input

  // Split classToRemove into an array to handle multiple classes
  const classesToRemove = classToRemove.split(' ');

  // Remove each class
  classesToRemove.forEach((cls) => {
    if (cls) element.classList.remove(cls);
  });
};

export const clearContent = (container) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
};
