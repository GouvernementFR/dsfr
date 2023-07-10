let counter = 0;

export const uniqueId = (id) => {
  if (!document.getElementById(id)) return id;
  let element = true;
  const base = id;
  while (element) {
    counter++;
    id = `${base}-${counter}`;
    element = document.getElementById(id);
  }
  return id;
};
