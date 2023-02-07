// import TABLE from './unicode-table';

/*
 const charCodeHex = (char) => {
 const code = char.charCodeAt(0).toString(16);
 return '0x0000'.slice(0, -code.length) + code;
 };
 */

const normalize = (text) => {
  if (!text) return text;
  // text = [...text].map(char => TABLE[charCodeHex(char)] || char).join('');
  text = text.replace(/\s/g, '_');
  text = text.toLowerCase();
  return text;
};

export default normalize;
