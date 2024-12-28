import dayjs from "dayjs";

export const helpers = {
  eq: (a, b) => a === b,
  formatDate: (date, format = 'MM/DD/YYYY') => {
    if (!format) format = 'MM/DD/YYYY';
    return dayjs(date).format(format);
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
