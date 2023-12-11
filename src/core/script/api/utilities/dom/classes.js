const sanitize = (className) => className.charAt(0) === '.' ? className.substr(1) : className;

const getClassNames = (element) => {
  switch (true) {
    case !element.className:
      return [];

    case typeof element.className === 'string':
      return element.className.split(' ');

    case typeof element.className.baseVal === 'string':
      return element.className.baseVal.split(' ');
  }

  return [];
};

export { getClassNames };

const modifyClass = (element, className, remove) => {
  className = sanitize(className);
  const classNames = getClassNames(element);
  const index = classNames.indexOf(className);
  if (remove === true) {
    if (index > -1) classNames.splice(index, 1);
  } else if (index === -1) classNames.push(className);
  element.className = classNames.join(' ');
};

const addClass = (element, className) => modifyClass(element, className);

export { addClass };

const removeClass = (element, className) => modifyClass(element, className, true);

export { removeClass };

const hasClass = (element, className) => getClassNames(element).indexOf(sanitize(className)) > -1;

export { hasClass };
