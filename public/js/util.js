export const addClass = (element, newClass) => {
  const oldClass = element.className;
  const oldClassList = oldClass.split(' ');
  oldClassList.forEach((classEl) => {
    if (element.classList && classEl) element.classList.remove(classEl);
  });
  element.className = `${newClass} ${oldClass}`;
};
