import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);

export default {
  eq: (a, b) => a === b,
  startsWith: (a, b) => a.startsWith(b),
  eqZero: (a, result, result2) => (a === 0 ? result : result2),
  isEvenNumber: (a, result) => (a % 2 === 0 ? result : false),
  isOddNumber: (a, result) => (a % 2 !== 0 ? result : false),

  formatDate: (date, format = 'MM/DD/YYYY', _format) => {
    return dayjs(date, _format).format(format);
  },
  math: (lvalue, operator, rvalue) => {
    lvalue = parseFloat(lvalue);
    rvalue = parseFloat(rvalue);
    return {
      '+': lvalue + rvalue,
      '-': lvalue - rvalue,
      '*': lvalue * rvalue,
      '/': lvalue / rvalue,
      '%': lvalue % rvalue,
    }[operator];
  },
  jsonStringtify: (obj) => JSON.stringify(obj),
  navigate: (path, text) => {
    return `<a href="${path}">${text}</a>`;
  },
};
