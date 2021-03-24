const modifiyClass = (element, className, remove) => {
  if (className.charAt(0) === '.') className = className.substr(1);
  const classNames = element.className.split(' ');
  const index = classNames.indexOf(className);
  if (remove === true) {
    if (index > -1) classNames.splice(index, 1);
  } else if (index === -1) classNames.push(className);
  element.className = classNames.join(' ');
};

const addClass = (element, className) => modifiyClass(element, className);

export { addClass };

const removeClass = (element, className) => modifiyClass(element, className, true);

export { removeClass };
